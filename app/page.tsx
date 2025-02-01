import Image from "next/image";
import { socialLinks } from "./config";
import './styles.css';

export default function Page() {
  return (
    <>
    <section className="background-logo">
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile_me.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        
      </h1>
      <div className="prose prose-neutral dark:prose-invert">

      <p>Greetings, internet wanderer! I'm <strong>Tej</strong>!</p>
      <p>Welcome to my corner on the internet. I'm an engineer constantly in the <em>making</em>, charting the uncharted territories of tomorrow.</p>
      <p>Fueled by ☕ and the dream of a brighter future,
      I'm dedicating my time ⏳ on this spinning rock 🌎 to doing what I love: <br/>
      wrangling 🖥️ code and exploring the frontiers of technology.</p>
      </div>
    </section>
    <div className="fixed-logo"></div>
    </>
  );
}
