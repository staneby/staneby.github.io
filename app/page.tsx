import type { Metadata } from 'next'
import Image from "next/image";
import { prefix } from "../utils/prefix";

export const metadata: Metadata = {
  title: 'AsimSoft LLC',
  description: 'Corporate site of AsimSoft LLC',
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h2 className="text-xl">Asimsoft LLC</h2>
        <Image src={`${prefix}/images/tools.svg`} width={50} height={50} alt="tool"/>
        <h1 className="text-2xl text-center">The website is currently under maintenance. Sorry for the inconvenience.</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
