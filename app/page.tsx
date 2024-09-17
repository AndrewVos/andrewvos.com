import { Metadata } from 'next';
import Link from "next/link"

export const metadata: Metadata = {
  title: 'andrewvos.com',
};

export default function Home() {
  return (
    <div id="container" className="absolute top-0 left-0 w-full h-full flex bg-white" >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center">
        <div className="space-y-12 flex flex-col items-center">
          <h1 className="flex select-none animate-jump-in">
            <div className='text-5xl font-bold text-white bg-black p-1 border-2 border-black'>
              Andrew
            </div>
            <div className="text-5xl font-bold text-black p-1 border-2 border-black">
              Vos
            </div>
          </h1>
          <div className="md:flex md:space-x-4 animate-jump-in animate-delay-[800ms]">
            <div>
              <Link href="/bio" className="text-3xl uppercase font-bold px-1 hover:bg-black hover:text-white active:bg-black active:text-white">
                CV
              </Link>
            </div>
            <div>
              <Link className='text-3xl uppercase font-bold px-1 hover:bg-black hover:text-white active:bg-black active:text-white' href="mailto:andrew@andrewvos.com">Contact</Link>
              {/* <Link href="/chat" className="text-3xl uppercase font-bold px-1 hover:bg-black hover:text-white active:bg-black active:text-white">
                Contact
              </Link> */}
            </div>
          </div>
          <div className="md:flex md:space-x-4 animate-jump-in animate-delay-[800ms]">
            <div>
              <Link href="/books" className="text-2xl uppercase font-bold px-1 hover:bg-black hover:text-white active:bg-black active:text-white">
                Bookshelf
              </Link>
            </div>
            <div>
              <Link href="https://github.com/AndrewVos" className="text-2xl uppercase font-bold px-1 hover:bg-black hover:text-white active:bg-black active:text-white">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
