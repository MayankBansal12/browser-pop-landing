'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, ArrowDown, Sun, Moon } from 'lucide-react'
import '../styles/theme.css'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.body.className = savedTheme
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.body.className = newTheme
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="min-h-screen flex flex-col md:mx-auto">
      <header className="py-3 px-4 lg:px-6 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">browserpop</div>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              keep a check on your browsing activity
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop lets you easily block distracting websites with just a link.
              boost your productivity and focus on what matters.
            </p>
            <Button size="lg">
              download .zip file
            </Button>
            <Button size="lg" variant="outline" className="ml-2">
              see download steps
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            currently not available on chrome or edge browser.
          </p>
        </section>

        <section id="how-it-works" className="py-20 px-4 rounded-lg sm:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">how it works...</h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
                <p>Copy the URL of the website you want to block</p>
              </div>
              <div className="flex items-center mb-6">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
                <p>Click the BrowserPop extension icon</p>
              </div>
              <div className="flex items-center">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
                <p>Paste the URL and hit block - it's that simple!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="download-steps" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">how to setup browserpop</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">1</div>
                  <div className="text-left">
                    <p className="font-semibold">Download & Extract</p>
                    <p className="text-sm text-muted-foreground">Get the BrowserPop zip file and extract it</p>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Download and extract"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="flex justify-center mb-12">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between mb-12">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">2</div>
                  <div className="text-left">
                    <p className="font-semibold">Enable Developer Mode</p>
                    <p className="text-sm text-muted-foreground">Go to browser extensions and enable Developer mode</p>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Enable Developer Mode"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="flex justify-center mb-12">
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-4">3</div>
                  <div className="text-left">
                    <p className="font-semibold">Load Extension</p>
                    <p className="text-sm text-muted-foreground">Click 'Load unpacked' and select the extracted folder</p>
                  </div>
                </div>
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Load Extension"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted rounded-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">See BrowserPop in Action</h2>
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

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">open source</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop is a simple extension built using html, css, js. the code is open source and can be accessed on github.
              in case of any feature requests, or issues, open an github issue. feel free to contribute.
            </p>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              view on github
            </Button>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted rounded-lg">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">ready to boost your productivity?</h2>
            <p className="text-md mb-8 text-muted-foreground max-w-2xl mx-auto">
              browserpop currently supports website blocking and setting up focus hours with features like website time tracking, activity analysis coming soon.
            </p>
            <Button size="lg">
              download browserpop now
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center">
            to be available on edge and chrome browser soon &lt;pending approval&gt;
          </p>
        </section>
      </main>

      <footer className="mt-10 py-4 px-4 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} browserPop. all rights reserved.
        </div>
        <p className="mt-4 text-sm text-muted-foreground text-center">
          by <Link href="https://x.com/simplermayank">mayank</Link>
        </p>
      </footer>
    </div>
  )
}