import { Blogs } from "@/components/Blogs";
import { usePosts } from "./layout";

export default async function Home() {
  const data = await fetch("https://dummyjson.com/posts");
  const postsData = await data.json();
  const posts = postsData.posts;

  return (
    <div>
      <Blogs />
    </div>
  );
}
