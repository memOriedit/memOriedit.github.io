import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const newsDirectory = path.join(process.cwd(), 'content/news')

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  content: string
}


export function getAllNewsSlugs(): string[] {
  try {
    if (!fs.existsSync(newsDirectory)) {
      return []
    }
    const files = fs.readdirSync(newsDirectory)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => path.basename(file, '.md'))
  } catch (error) {
    console.error('Error reading news directory:', error)
    return []
  }
}

export function getNewsArticle(slug: string): NewsArticle | null {
  try {
    const filePath = path.join(newsDirectory, `${slug}.md`)
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown content synchronously for compatibility
    const processedContent = remark()
      .use(html)
      .processSync(content)
    
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      content: processedContent.toString()
    }
  } catch (error) {
    console.error('Error reading news article:', error)
    return null
  }
}

export function getAllNewsArticles(): NewsArticle[] {
  try {
    const slugs = getAllNewsSlugs()
    const articles: NewsArticle[] = []
    
    for (const slug of slugs) {
      const article = getNewsArticle(slug)
      if (article) {
        articles.push(article)
      }
    }
    
    return articles.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error getting all news articles:', error)
    return []
  }
}
