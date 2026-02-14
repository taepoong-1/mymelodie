import { getAllTests } from "@/lib/tests";
import ResultClient from "./ResultClient";

export async function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({
    id: test.id,
  }));
}

export default function Page() {
  return <ResultClient />;
}
