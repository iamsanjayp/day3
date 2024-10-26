import Link from "next/link";

export default function Home() {
  return (
    <body>
      <div>
        <h1>This is the First page</h1>
        <nav>
          <Link href="/about">Go to page 2</Link>
        </nav>
      </div>
    </body>
  );
}
