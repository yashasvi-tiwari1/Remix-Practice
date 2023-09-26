import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <ul className="list-disc">
        <li>
          <Link to="/new" className="text-xl text-blue-600 underline">
            New Page hello
          </Link>
        </li>
        <li>
          <Link to="/posts"> Post Home</Link>
        </li>
      </ul>
    </div>
  );
}
