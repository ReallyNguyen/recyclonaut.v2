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
        asd
        <Button
          name={"STORY"}
          page={"/intro"}
        />
      </Intro>
    </>
  );
}
