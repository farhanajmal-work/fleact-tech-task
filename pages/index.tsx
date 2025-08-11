import Education from "@/components/Dashboard/Education";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Dashboard",
  description: "This is Home Blog page for Education",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Education />
    </>
  );
}
