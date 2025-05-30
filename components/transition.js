import { motion as m } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const bars = [2, 2.5, 3, 3.5, 4, 4.5];

export default function Transition() {
    return (
        <>
            <Head>
                <title>Recyclonaut</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative flex items-center justify-start h-screen overflow-hidden">
                <m.div
                    className="absolute left-0"
                    initial={{ x: -100 }}
                    animate={{ x: "100vw" }}
                    transition={{
                        duration: 1,
                        delay: 1
                    }}
                >
                    <Image
                        src={"/rocket.svg"}
                        width={100} height={100}
                        alt="Rocket"
                        style={{ transform: "rotate(90deg)" }}
                    />
                </m.div>

                {bars.map((delay, i) => (
                    <m.div
                        key={i}
                        className="w-100 h-6 bg-amber-50 flex justify-center align-center"
                        initial={{ height: 0 }}
                        animate={{ height: "100vh" }}
                        transition={{
                            duration: 1,
                            delay,
                            ease: "easeOut"
                        }}
                    />
                ))}


            </div>
        </>
    );
}
