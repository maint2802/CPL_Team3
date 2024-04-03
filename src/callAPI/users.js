import axios from "axios";

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export async function getUserDetail(userId) {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  return res;
}
