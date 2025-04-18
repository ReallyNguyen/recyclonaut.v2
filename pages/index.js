import { motion as m, } from "motion/react"
import Head from "next/head"

export default function Home() {

  return (
    <>
      <Head>
        <title>Recyclonaut</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/logo.svg" /> logo soon*/}
      </Head>
      <m.div
        className="w-screen h-screen bg-amber-50"

        transition={{ duration: 1 }}
      />
      <m.div
        className="w-2.5 h-2.5 bg-amber-50"

        initial={{ y: 0 }}
        animate={{ y: 100 }}
      />
    </>



  )
}