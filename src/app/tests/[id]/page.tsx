import { getAllTests, getTestById } from "@/lib/tests";
import TestRunnerClient from "./TestRunnerClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tests = getAllTests();
  return tests.map((test) => ({
    id: test.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const test = getTestById(params.id);

  if (!test) {
    return <TestRunnerClient />;
  }

  return (
    <>
      <TestRunnerClient />
      {test.longDescription && (
        <div
          className="container animate-fade-in"
          style={{ maxWidth: "600px", padding: "0 16px 60px" }}
        >
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: test.longDescription }}
            style={{
              color: "var(--text-main)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginTop: "20px",
              paddingTop: "40px",
              borderTop: "1px solid var(--border)",
            }}
          />
        </div>
      )}
    </>
  );
}
