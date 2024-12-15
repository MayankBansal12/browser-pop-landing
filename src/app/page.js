'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Github, ArrowRight, Sun, Moon } from 'lucide-react'
import '../styles/theme.css'

export default function Home() {
  const [theme, setTheme] = useState('light')

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
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b">
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
              Take Control of Your Browsing
            </h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              BrowserPop lets you easily block distracting websites with just a link.
              Boost your productivity and focus on what matters.
            </p>
            <Button size="lg">
              Add to Browser
            </Button>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
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

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Use</h2>
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
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
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
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
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

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
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
              Watch how easy it is to block distracting websites with BrowserPop
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Open Source and Community-Driven</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              BrowserPop is an open-source project, built with love by developers for developers.
              Check out our GitHub repository to contribute, report issues, or simply explore the code.
            </p>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Created by John Doe • Licensed under MIT
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Productivity?</h2>
            <Button size="lg">
              Get BrowserPop Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BrowserPop. All rights reserved.
        </div>
      </footer>
    </div>
  )
}