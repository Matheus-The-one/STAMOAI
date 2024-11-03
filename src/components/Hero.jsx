import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import { useUser, SignInButton } from "@clerk/clerk-react";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  const { isSignedIn } = useUser();

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Transform your blogs into short videos with {` `}
            <span className="inline-block relative">
              stamo.AI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          
          {isSignedIn ? (
            <Button className="mx-4" href="https://stamoaitest-506123048659.us-central1.run.app/">
              Get Demo
            </Button>
          ) : (
            <SignInButton mode="modal">
              <Button className="mx-4">
                Get Started
              </Button>
            </SignInButton>
          )}
        </div>
        
        <div className="">
          <div className="">
            <div className="">
              <div className="" />
              <div className="">
                {/* Content for this div */}
              </div>
            </div>
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          
          <BackgroundCircles />
        </div>
        
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      
      <BottomLine />
    </Section>
  );
};

export default Hero;
