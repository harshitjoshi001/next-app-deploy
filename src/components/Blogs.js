import { Card } from "./Card";

export const Blogs = async () => {
  const data = await fetch("https://dummyjson.com/posts");
  const postsData = await data.json();
  const posts = postsData.posts;

  return posts.map((data) => {
    return <Card key={data.id} data={data} />;
  });
};
