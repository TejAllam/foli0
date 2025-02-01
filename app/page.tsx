"use client";
import Image from "next/image";
import { socialLinks } from "./config";
import './styles.css';
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const messages = [
      "Hi!      ",
      "Hello    ",
      "Hola",
      "नमस्ते",
      "你好",
      "నమస్కారం",
      "         ",
      // "wanderer ",
      // "journeyman",
      // "traveller "
    ];
    
    const display = document.getElementById('display');
    if (!display) {
      console.error('Display element not found');
      return;
    }

    // Create character slots
    const maxLength = Math.max(...messages.map(msg => msg.length));
    for (let i = 0; i < maxLength; i++) {
      const charDiv = document.createElement('div');
      charDiv.className = 'character';
      display.appendChild(charDiv);
    }

    const characters = document.querySelectorAll('.character');
    let currentMessageIndex = 0;

    function updateDisplay() {
      const currentMessage = messages[currentMessageIndex];

      characters.forEach((charDiv, index) => {
        // Clear existing flip elements
        while (charDiv.firstChild) {
          charDiv.removeChild(charDiv.firstChild);
        }
        
        if (index < currentMessage.length) {
          const flipDiv = document.createElement('div');
          flipDiv.className = 'flip';
          flipDiv.textContent = currentMessage[index];
          charDiv.appendChild(flipDiv);
        }
      });
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    updateDisplay(); // Initial display
    setInterval(updateDisplay, 5000); // Update every 5 seconds

  }, []);
  return (
    <>
        <section className="flip-section">
        <div className="board">
          <div className="display" id="display">
            <div className="character"></div>
          </div>
        </div>
      </section>

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

      <p>I'm <strong>Tej</strong>!</p>
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
