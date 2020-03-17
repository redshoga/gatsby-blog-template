export const path = {
  rootIndex: () => "",
  blogIndex: () => "/posts",
  blogPost: (slug: string) => `/posts/${slug}`,
  blogTag: (slug: string) => `/posts/tag/${slug}`,
  portfolioIndex: () => "/me",
}
