import { createClient } from 'microcms-js-sdk';


const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

console.log(serviceDomain, apiKey);

// microCMS client
export const client = createClient({
  serviceDomain,
  apiKey
});

// Types based on the API structure from the attached JSON
export interface Writer {
  id: string;
  value: string;
}

export interface Category {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

export interface BlogPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  writer: Writer[];
  date: string;
  category: Category;
  thumbnail?: {
    url: string;
    height: number;
    width: number;
  };
  body: string;
}

export interface BlogResponse {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
}

// API functions
export const getBlogPosts = async (
  limit: number = 10,
  offset: number = 0,
  categoryId?: string
): Promise<BlogResponse> => {
  const filters = categoryId ? `category[equals]${categoryId}` : '';
  
  return await client.get({
    endpoint: 'blog',
    queries: {
      limit,
      offset
    },
  });
};

export const getBlogPost = async (contentId: string): Promise<BlogPost> => {
  return await client.get({
    endpoint: 'blog',
    contentId,
  });
};

export const getCategories = async () => {
  return await client.get({
    endpoint: 'categories',
  });
};