import Header from "@/components/global/header";
import Marque from "@/components/global/marque";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <section className="w-full h-screen flex flex-row items-center px-28">
        <div className="space-y-12 flex-[1.5]">
          <h1 className="text-8xl text-secondary font-dm">Unleash Your Voice withVoice Cloning</h1>
          <p className="text-xl text-accent
          ">Revolutionize your audio content with our state-of-the-art voice cloning technology. Create custom voices, narrations, and more with ease.</p>
          <div className="space-x-8">
            <Button>Try the Demo</Button>
            <Button variant={'outline'}>Pricing</Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image alt='heroimg' src={'https://images.unsplash.com/photo-1718968053609-2ebb48c56421?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'} width={450} height={300} />
        </div>
      </section>
      <Marque duration={100} />
      <section className="w-full h-screen">
        <h3>hello</h3>
      </section>
    </main>
  );
}
