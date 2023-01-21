import type { NextPage } from "next";
import Head from "next/head";
import Quote from "./Quote";
import Visitor from "./Visitor";
import Image from "./Image";

const Home: NextPage = () => {
  return (
    <div className="w-full border-2 border-black min-h-screen">
      <Head>
        <title>Test Case App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="border-2 border-green-300 rounded-3xl mx-20 my-16">
        <header className="">
          <img
            className="h-8 w-40 ml-4 mt-2"
            src="/img/logo.svg"
            alt="WorkAction"
          />
        </header>
        <main className="flex items-center flex-wrap justify-around items-center my-4 max-h-screen lg:my-10">
          <Image />
          <Quote />
        </main>
        <footer className="flex h-12 items-center justify-center border-2 border-green-600 my-4 mx-2 lg:h-16  my-8 mx-4">
          <p className="flex items-center justify-center gap-2">
            <Visitor /> Powered by
            <a
              className="underline decoration-indigo-500 font-bold hover:bg-amber-100"
              href="https://www.wus.agency/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W&S
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
