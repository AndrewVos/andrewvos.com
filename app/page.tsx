"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div id="container" className="absolute top-0 left-0 w-full h-full flex bg-very-dark">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl text-gray-100">
            Hello, I'm
            <span className="text-blue-200">{" "}Andrew Vos</span>
          </h1>
          <h2 className="text-3xl text-gray-100">
            I'm a full-stack software engineer
          </h2>
          <Link className="pointer-events-auto inline-block mt-5 p-3 text-2xl text-gray-100 border-2 border-solid border-gray-600 hover:bg-gray-800" href="/bio">Find out more</Link>
        </div>
      </div>
    </div>
  )
}
