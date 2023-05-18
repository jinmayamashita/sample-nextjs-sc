import { Items } from "../components/items";
import { sleep } from "../utils/sleep";

async function getUsers() {
  await sleep(3);
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
}

export async function Users() {
  const users = await getUsers();

  return <Items items={users} />;
}
