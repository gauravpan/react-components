import Link from "next/link";
export default function Home() {
  return (
    <div className="mx-auto max-w-screen-md mt-16">
      <h2 className="text-3xl">React Components</h2>
      <ul className="list-disc mt-8">
        <li className="text-blue-500">
          <Link href="/suggestion-input">SuggestionInput</Link>
        </li>
      </ul>
    </div>
  );
}
