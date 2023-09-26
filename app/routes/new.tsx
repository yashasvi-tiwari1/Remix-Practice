import { Link, Links } from "@remix-run/react";
import React from "react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facere possimus hic, dignissimos, incidunt aspernatur vero ut reiciendis nobis delectus perferendis beatae ad cupiditate tempore quibusdam ab libero quasi corporis.",
    },
  ];
}
export default function NewRoute() {
  return (
    <div>
      <h1>NewRoute</h1>
      <h1>This is testing phase of bulma css</h1>
      <h1>This is also testing phase of bulma css</h1>
      <h1>this is last one</h1>
      <Links />
    </div>
  );
}
