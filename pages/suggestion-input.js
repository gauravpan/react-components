import Head from "next/head";
import { useEffect, useState } from "react";
import { SuggestionInput } from "../components";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <div className="h-screen flex justify-center pt-40   bg-gray-100">
      <div className="max-w-screen-sm">
        {keyword && (
          <div className="font-bold text-2xl py-8">
            So, you want to search "{keyword}"
          </div>
        )}
        <SuggestionInput setKeyword={setKeyword} />
      </div>
    </div>
  );
}
