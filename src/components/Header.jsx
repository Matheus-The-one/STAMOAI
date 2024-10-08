import React from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { SignInButton, UserButton, SignOutButton, useUser } from "@clerk/clerk-react";
import { brainwaveSymbol } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const { isSignedIn, user } = useUser();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <h1 className="flex p-0 m-0 w-[230px] h-[100px] items-center justify-center">
            <img src={brainwaveSymbol} alt="stamo" />
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              if (item.id === "4" || item.id === "5") {
                // Special handling for sign up and sign in on mobile
                if (item.id === "4" && !isSignedIn) {
                  return (
                    <SignInButton key={item.id} mode="modal">
                      <button className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-6 md:py-8">
                        {item.title}
                      </button>
                    </SignInButton>
                  );
                } else if (item.id === "5" && !isSignedIn) {
                  return (
                    <SignInButton key={item.id} mode="modal">
                      <button className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:hidden px-6 py-6 md:py-8">
                        {item.title}
                      </button>
                    </SignInButton>
                  );
                } else {
                  return null; // Don't show these items if user is signed in
                }
              }
              
              return (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              );
            })}
            
            {isSignedIn && (
              <div className="lg:hidden flex flex-col items-center mt-4">
                <span className="text-n-1 mb-2">Hello, {user.firstName || user.username}!</span>
                <UserButton afterSignOutUrl="/" />
                <SignOutButton>
                  <Button className="mt-2">Sign Out</Button>
                </SignOutButton>
              </div>
            )}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="hidden lg:flex items-center ml-auto">
          {isSignedIn ? (
            <div className="flex items-center">
              <span className="text-n-1 mr-4">Hello, {user.firstName || user.username}!</span>
              <UserButton afterSignOutUrl="/" />
              <SignOutButton>
                <Button className="ml-4">Sign Out</Button>
              </SignOutButton>
            </div>
          ) : (
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          )}
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;