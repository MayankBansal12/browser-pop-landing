"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ArrowDown, Sun, Moon } from "lucide-react";
import "../styles/theme.css";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  };

  const showSectionWithId = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen flex flex-col md:mx-auto">
      <header className="py-3 px-4 lg:px-6 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">browserpop</div>
          <div className="flex justify-center items-center gap-3">
            <button
              className="text-sm cursor-pointer text-foreground hover:text-muted-foreground hidden md:inline"
              onClick={() => showSectionWithId("how-it-works")}
            >
              how it works
            </button>
            <button
              className="text-sm cursor-pointer text-foreground hover:text-muted-foreground hidden sm:inline"
              onClick={() => showSectionWithId("extension-demo")}
            >
              see demo
            </button>
            <Link href="https://github.com/MayankBansal12/browser-pop">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Github className="h-[1.4rem] w-[1.4rem]" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-4 px-4 sm:px-6 lg:px-8 h-[80vh] flex flex-col gap-4 justify-center items-center">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              keep a check on your browsing activity
            </h1>
            <p className="text-xl my-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop lets you easily block distracting websites with just a
              link. boost your productivity and focus on what matters.
            </p>
            <Link
              href="https://github.com/MayankBansal12/browser-pop/archive/refs/heads/main.zip"
              download="browser-pop.zip"
              rel="noopener noreferrer"
            >
              <Button size="lg">download .zip file</Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="ml-2"
              onClick={() => showSectionWithId("download-steps")}
            >
              see download steps
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            currently not available on chrome or edge browser.
          </p>
        </section>

        <section
          id="how-it-works"
          className="py-12 px-4 rounded-lg sm:px-6 lg:px-8 bg-muted"
        >
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              how it works...
            </h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  1
                </div>
                <p>Copy the URL of the website you want to block</p>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  2
                </div>
                <p>Click the BrowserPop extension icon</p>
              </div>
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  3
                </div>
                <p>Paste the URL and hit block - it's that simple!</p>
              </div>
              <Image
                src="/img/how-it-works.png"
                alt="how-it-works"
                width={500}
                height={500}
                className="mt-10 rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </section>

        <section id="download-steps" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              how to setup browserpop
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    1
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Download & Extract</p>
                    <p className="text-sm text-muted-foreground">
                      Get the BrowserPop zip file and extract it
                    </p>
                  </div>
                </div>
                <Image
                  src="/img/step-1.png"
                  alt="Download and extract"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="flex justify-center mb-12">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    2
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Enable Developer Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Go to browser extension settings and enable Developer
                      mode, refer the image for edge
                    </p>
                  </div>
                </div>
                <Image
                  src="/img/step-2.png"
                  alt="Enable Developer Mode"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="flex justify-center mb-12">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-4 mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">
                    3
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Load Extension</p>
                    <p className="text-sm text-muted-foreground">
                      Click 'Load unpacked' and select the extracted
                      browser-pop-main folder
                    </p>
                  </div>
                </div>
                <Image
                  src="/img/step-3.png"
                  alt="Load Extension"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="extension-demo"
          className="py-12 px-4 sm:px-6 lg:px-8 bg-muted rounded-lg"
        >
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              See BrowserPop in Action
            </h2>
            <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
              <Image
                src="/placeholder.svg?height=480&width=640"
                alt="BrowserPop Demo"
                width={640}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="mt-4 text-muted-foreground">
              watch how easy it is to use browserpop
            </p>
          </div>
        </section>

        <section className="my-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">view more on github...</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop is a simple extension built using html, css, js. the
              code is open source and can be accessed on github. in case of any
              feature requests, or issues, open an github issue. feel free to
              contribute.
            </p>
            <Link href="https://github.com/MayankBansal12/browser-pop">
              <Button size="lg" variant="outline">
                <Github className="mr-2 h-4 w-4" />
                view on github
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted rounded-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              ready to boost your productivity?
            </h2>
            <p className="text-md mb-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop currently supports website blocking and setting up
              focus hours with features like website time tracking, activity
              analysis coming soon.
            </p>
            <Link
              href="https://github.com/MayankBansal12/browser-pop/archive/refs/heads/main.zip"
              download="browser-pop.zip"
            >
              <Button size="lg">download browserpop now</Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            to be available on edge and chrome browser soon &lt;pending
            approval&gt;
          </p>
        </section>
      </main>

      <footer className="mt-10 py-4 px-4 lg:px-8 border-t border-border">
        <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} browserPop. made by{" "}
          <Link
            href="https://mayankbansal.xyz"
            className="text-foreground hover:text-muted-foreground"
          >
            mayank
          </Link>
        </div>
      </footer>
    </div>
  );
}
