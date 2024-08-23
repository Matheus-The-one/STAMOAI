'use client'

import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useEffect, useRef } from 'react';

const Benefits = () => {
  
  function VideoComponent({ videoUrl }) {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const videoElement = videoRef.current;

      const handleUserInteraction = () => {
        videoElement.muted = true;
        videoElement.play();
      };

      
      window.addEventListener('scroll', handleUserInteraction, { once: true });

      return () => {
       
        window.removeEventListener('scroll', handleUserInteraction);
      };
    }, []);

    return (
      <video
  ref={videoRef}
  loop
  src={videoUrl}
  className="border-4 border-gray-700 rounded-lg w-full max-w-xl 
             shadow-inner"
/>


    );
  }

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title=""
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>

                <VideoComponent videoUrl={item.videoUrl} />

                <div className="flex items-center mt-auto">
                  <p className="my-3 ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Blog Link
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={`Image showcasing ${item.title}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div> 
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
