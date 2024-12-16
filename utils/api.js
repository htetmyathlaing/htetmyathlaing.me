export const fetchPosts = async () => {
  const response = await fetch('https://raw.githubusercontent.com/htetmyathlaing/blog.htetmyathlaing.me/refs/heads/main/posts.json')
  const data = await response.json()
  return data.posts
}
