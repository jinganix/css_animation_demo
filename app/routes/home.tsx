import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col space-y-2">
        <a href="/case1">Case1</a>
        <a href="/case2">Case2</a>
        <a href="/case3">Case3</a>
        <a href="/case4">Case4</a>
        <a href="/case5">Case5</a>
        <a href="/case6">Case6</a>
        <a href="/case7">Case7</a>
        <a href="/case8">Case8</a>
        <a href="/Case9">Case9</a>
      </div>
    </div>
  );
}
