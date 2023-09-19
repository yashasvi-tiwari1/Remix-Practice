import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Form,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Contacts</h1>
          <div>
            <Form id="search-form" role="search" method="post">
              <input
                type="text"
                aria-label="Search Contacts"
                id="q"
                name="q"
                placeholder="Search"
              />
              <div aria-hidden hidden={true} id="search-spinner"></div>
            </Form>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/contact/1"> Yashasvi Tiwari</a>
              </li>
              <li>
                <a href="/contact/2">Saurab Bikram Sen</a>
              </li>
            </ul>
          </nav>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
