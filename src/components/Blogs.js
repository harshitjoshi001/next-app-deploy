import { Card } from "./Card";

export const Blogs = async () => {
  const data = await fetch(
    "https://672870c2270bd0b9755571d5.mockapi.io/api/v1/users"
  );
  const postsData = await data.json();
  const posts = postsData;

  return posts.map((data) => {
    return <Card key={data.id} data={data} />;
  });
};
