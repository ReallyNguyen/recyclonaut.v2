import { motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Intro from "@/components/intro";
import Button from "@/components/button";
import Transition from "@/components/transition";
import Test from "@/components/test";

export default function Home() {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/logo.svg" /> logo soon */}
      </Head>
      <Intro>

        <div className="flex h-screen items-center justify-center">
          <div>
            <h1 className="text-6xl font-[Orbitron] font-bold">
              RECYCLONAUT
            </h1>
          </div>
          <div>
            <Button
              name={"STORY"}
              page={"/intro"}
            />
            <Button
              name={"ASSESSMENT"}
              page={"/intro"}
            />
            <Button
              name={"ABOUT"}
              page={"/intro"}
            />
          </div>
        </div>

      </Intro>
    </>
  );
}
