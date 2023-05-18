import { Items } from "../components/items";
import { sleep } from "../utils/sleep";

async function getPosts() {
  await sleep(5);
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export async function Posts() {
  const posts = await getPosts();

  return <Items items={posts} />;
}
