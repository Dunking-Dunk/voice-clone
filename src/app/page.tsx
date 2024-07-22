import Header from "@/components/global/header";
import Marque from "@/components/global/marque";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "@/components/global/footer";
import Link from "next/link";


export default function Home() {
  let sectionColorCounter = 0;

  const getSectionColor = () => {
    sectionColorCounter++;
    return sectionColorCounter % 2 === 0 ? "#FF903F" : "#FFC998";
  };

  return (
    <main className="h-full w-full relative">
      <Header />
      <section className="w-full h-screen flex flex-row items-center px-28" style={{ backgroundColor: getSectionColor() }}>
        <div className="space-y-12 flex-[1.5]">
          <h1 className="text-8xl text-secondary font-dm">Unleash Your Voice with Voice Cloning</h1>
          <p className="text-xl text-accent
          ">Revolutionize your audio content with our state-of-the-art voice cloning technology. Create custom voices, narrations, and more with ease.</p>
          <div className="space-x-8">
            <Link href={'/signin'}>
              <Button>
                Try the Demo
              </Button></Link>
            <Button variant={'outline'}>Pricing</Button>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image alt='heroimg' src={'https://images.unsplash.com/photo-1718968053609-2ebb48c56421?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'} width={450} height={300} />
        </div>
      </section>
      <Marque duration={15} />
      <section className="w-full h-screen flex items-center space-x-28 px-28" style={{ backgroundColor: getSectionColor() }}>
        <div className="flex-1 space-y-12">
          <div className="bg-secondary p-4 rounded-lg text-center">
            <h3 className="text-xl text-accent text-white">How it works</h3>
          </div>
          <div className="text-center space-y-8">
            <h2 className="text-5xl text-secondary font-dm">Revolutionize your audio</h2>
            <p className="text-xl text-accent  text-left">Revolutionize your audio content with our state-of-the-art voice cloning technology. Create custom voices, narrations, and more with ease.</p>
          </div>
          <div className="space-y-8">
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
              <div>
                <h3 className="text-2xl text-secondary">Record your Voice</h3>
                <p className="text-accent">Upload a short audio sample of your voice to get started.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <h3 className="text-2xl text-secondary">AI Voice Cloning</h3>
                <p className="text-accent">Our advanced AI technology will analyze your voice and create a custom voice model.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <h3 className="text-2xl text-secondary">Customize and Use</h3>
                <p className="text-accent  text-left">Our advanced AI technology will analyze your voice and create a custom voice model.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image alt='secondimg' src={'https://images.unsplash.com/photo-1718968053609-2ebb48c56421?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'} width={450} height={300} />
        </div>
      </section>
      <section className="w-full h-screen flex items-center space-x-28 px-28" style={{ backgroundColor: getSectionColor() }}>
        <div className="flex-1">
          <Image alt='thirdimg' src={'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} width={450} height={500} />
        </div>
        <div className="flex-1 space-y-12">
          <div className="bg-secondary p-4 rounded-lg">
            <h3 className="text-xl text-accent text-center text-white">Key benefits</h3>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl text-secondary font-dm text-left">Unlock New Possibilities</h2>
            <p className="text-xl text-accent text-left">Our voice cloning technology offers a wide range of benefits for businesses and content creators. Discover how it can transform your audio projects.</p>
          </div>
          <div className="space-y-8">
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <div>
                <h3 className="text-2xl text-secondary text-left">Personalized Narrations</h3>
                <p className="text-accent text-left">Create custom narrations and voiceovers with the unique voice of your brand or characters.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              <div>
                <h3 className="text-2xl text-secondary text-left">Multilingual Content</h3>
                <p className="text-accent text-left">Easily translate your audio content into multiple languages without the need for re-recording.</p>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              <div>
                <h3 className="text-2xl text-secondary text-left">Increased Engagement</h3>
                <p className="text-accent text-left">Captivate your audience with realistic, natural-sounding voices that enhance the overall experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen flex flex-col items-center space-y-6 p-28" style={{ backgroundColor: getSectionColor() }}>
        <h2 className="text-5xl font-dm text-secondary text-center">Choose Your Plan</h2>
        <p>Our voice cloning service offers flexible plans to fit your needs.</p>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#FFC998] rounded-lg shadow-lg border-2 border-dashed border-accent">
            <h3 className="text-2xl font-dm text-secondary mb-4">Starter</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-4xl font-dm text-secondary">$5</p>
              <hr className="w-full border-t-2 border-accent" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">1 custom voice model</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">10 minutes of audio per month</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">Basic customization tools</p>
              </div>
            </div>
            <Button className="mt-8">Get Started</Button>
          </div>
          <div className="p-8 bg-[#FFC998] rounded-lg shadow-lg border-2 border-dashed border-accent">
            <h3 className="text-2xl font-dm text-secondary mb-4">Pro</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-4xl font-dm text-secondary">$10</p>
              <hr className="w-full border-t-2 border-accent" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">3 custom voice models</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">30 minutes of audio per month</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">Advanced customization tools</p>
              </div>
            </div>
            <Button className="mt-8">Get Started</Button>
          </div>
          <div className="p-8 bg-[#FFC998] rounded-lg shadow-lg border-2 border-dashed border-accent">
            <h3 className="text-2xl font-dm text-secondary mb-4">Enterprise</h3>
            <div className="flex justify-between items-center mb-4">
              <p className="text-4xl font-dm text-secondary">Custom</p>
              <hr className="w-full border-t-2 border-accent" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">Unlimited custom voice models</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">Unlimited audio per month</p>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 fill-current text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                <p className="text-accent flex-1">Dedicated support</p>
              </div>
            </div>
            <Button className="mt-8">Contact Us</Button>

          </div>

        </div>

      </section>
      <div className="w-full h-full flex items-center justify-center bg-[#FF903F] pb-10">
        <p className="text-accent">Made in Chennai  with ❤️</p>
      </div>



    </main >
  );
}
