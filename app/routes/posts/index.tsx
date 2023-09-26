import { Link, useLoaderData } from "@remix-run/react";
import React, { useState } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

export async function loader() {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    return {
      posts: data,
    };
  } catch (error) {
    console.error("Error making the GET request:", error);
  }
}
export default function NewPosts() {
  const data = useLoaderData<{ posts: [] }>();
  console.log(data);

  return (
    <div>
      <h1>Post Home</h1>
      <ul>
        {data.posts.map((post: any) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.name} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
