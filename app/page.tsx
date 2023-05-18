import { Suspense } from "react";
import { Posts } from "./posts";
import { Users } from "./users";
import { Skeleton } from "../components/skeleton";
import { LayoutSection } from "@/components/layout-section";

export default function Page() {
  return (
    <>
      <header>App Header</header>

      <main>
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At non cum,
          beatae earum!
        </p>

        <div style={style}>
          <LayoutSection>
            <h2>Posts</h2>
            <Suspense fallback={<Skeleton />}>
              {/* @ts-expect-error Server Component */}
              <Posts />
            </Suspense>
          </LayoutSection>

          <LayoutSection>
            <h2>Users</h2>
            <Suspense fallback={<Skeleton />}>
              {/* @ts-expect-error Server Component */}
              <Users />
            </Suspense>
          </LayoutSection>
        </div>
      </main>
      <footer>App Footer</footer>
    </>
  );
}

const style: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "24px 0",
};
