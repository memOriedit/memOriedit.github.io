import type { APIRoute } from 'astro';
import { getBlogPosts } from '../lib/microcms';

const SITE_URL = 'https://memoriedit.github.io';

export const GET: APIRoute = async () => {
  try {
    // Fetch all blog posts for dynamic routes
    // MicroCMS has a maximum limit of 100 per request
    let allBlogPosts: any[] = [];
    let offset = 0;
    const limit = 100;
    
    // Fetch all posts using pagination
    while (true) {
      const blogResponse = await getBlogPosts(limit, offset);
      allBlogPosts = [...allBlogPosts, ...blogResponse.contents];
      
      // Break if we've fetched all posts
      if (blogResponse.contents.length < limit || allBlogPosts.length >= blogResponse.totalCount) {
        break;
      }
      
      offset += limit;
    }
    
    const blogPosts = allBlogPosts;

    // Static pages
    const staticPages = [
      {
        url: `${SITE_URL}/`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: '1.0'
      },
      {
        url: `${SITE_URL}/blog/`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: '0.8'
      }
    ];

    // Dynamic blog post pages
    const blogPages = blogPosts.map(post => ({
      url: `${SITE_URL}/blog/${post.id}/`,
      lastmod: post.updatedAt || post.publishedAt,
      changefreq: 'monthly',
      priority: '0.6'
    }));

    // Combine all pages
    const allPages = [...staticPages, ...blogPages];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Internal Server Error', {
      status: 500
    });
  }
};