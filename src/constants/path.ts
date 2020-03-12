export const path = {
  blogIndex: () => "/blog",
  blogPost: (slug: string) => `/blog/post/${slug}`,
  blogTag: (slug: string) => `/blog/tag/${slug}`,
  portfolioIndex: () => "/portfolio",
}
