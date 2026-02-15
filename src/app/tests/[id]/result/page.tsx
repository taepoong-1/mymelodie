import { getAllTests } from "@/lib/tests";
import ResultClient from "./ResultClient";

export async function generateStaticParams() {
  const tests = getAllTests();
  return tests
    .filter((test) => test.id !== "guessing-game")
    .map((test) => ({
      id: test.id,
    }));
}

export default function Page() {
  return <ResultClient />;
}
