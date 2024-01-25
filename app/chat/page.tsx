'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const chatDelay = 10000

type Line = {
    delay: number,
    text: string | JSX.Element
}

const allLines: Line[] = [
    {
        delay: 1000,
        text: "hi",
    },
    {
        delay: 3000,
        text: "can't hear you!"
    },
    {
        delay: 15000,
        text: "sorry, just messing with you, this isn't actually a live webcam"
    },
    {
        delay: 18000,
        text: <Link href="/contact" className="underline">Contact me here</Link>
    }
]

const Chat = () => {
    const [lines, setLines] = useState<{ user: string; text: string | JSX.Element }[]>([]);
    const [inputText, setInputText] = useState("")

    const div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        allLines.map(line => {
            setTimeout(() => {
                const newLine = { user: "Andrew Vos", text: line.text }
                setLines((prev) => ([...prev, newLine]))
            }, chatDelay + line.delay)
        }, [])
    }, [])

    useEffect(() => {
        if (div.current) {
            div.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [lines])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (inputText) {
            setLines([...lines, { user: "You", text: inputText }])
            setInputText("")
        }
    }

    return (
        <>
            <div className="grow flex overflow-scroll border p-2">
                <div className="">
                    {lines.map((line, index) => (
                        <div key={index} className="" ref={div}>
                            <div className="text-md text-gray-700 ">
                                <div className="inline font-bold text-gray-700">
                                    {line.user}:&nbsp;
                                </div>
                                <div className="inline">
                                    {line.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border p-1 space-y-1 flex flex-col">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="border w-full px-2 py-0" autoFocus></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default function Page() {
    const [playingMyVideo, setPlayingMyVideo] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPlayingMyVideo(true)
        }, 2000)
    }, [])

    useEffect(() => {
        const video: HTMLVideoElement | null = document.querySelector("#videoElement") as HTMLVideoElement;

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err0r) {
                    console.log(err0r)
                    console.log("Something went wrong!");
                });
        }
    })

    return (
        <div className="font-serif p-3  h-full flex flex-col space-y-2" >
            <div className="grid md:grid-cols-2 gap-2">
                <div className="flex justify-center items-center border bg-gray-900">
                    <div className="relative w-full min-h-96">
                        <div className="absolute inline bottom-2 left-2 px-1 bg-gray-700 opacity-80 rounded text-white  text-sm font-bold">
                            Andrew Vos
                        </div>
                        <video className=" " width="100%" height="100%" controls={false} autoPlay={true} muted playsInline >
                            {playingMyVideo && (<source src="/videos/me.webm" type="video/webm" />)}
                            {playingMyVideo && (<source src="/videos/me.mp4" type="video/mp4" />)}

                        </video>
                    </div>
                </div>
                <div className="flex justify-center items-center border bg-gray-900">
                    <div className="relative w-full min-h-96">
                        <div className="absolute bottom-2 left-2 px-1 bg-gray-700 opacity-80 rounded text-white  text-sm font-bold">
                            You
                        </div>
                        <video id="videoElement" className=" w-full " width="100%" height="100%" controls={false} autoPlay={true} muted playsInline >
                        </video>
                    </div>
                </div>
            </div>

            <Chat />

            <div className="flex items-center justify-center">
                <button className="bg-red-500 text-white p-2 rounded-full " id="but">
                    <svg width="40px" height="40px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 8q2.95 0 5.813 1.188T22.9 12.75q.3.3.3.7t-.3.7l-2.3 2.25q-.275.275-.638.3t-.662-.2l-2.9-2.2q-.2-.15-.3-.35t-.1-.45v-2.85q-.95-.3-1.95-.475T12 10q-1.05 0-2.05.175T8 10.65v2.85q0 .25-.1.45t-.3.35l-2.9 2.2q-.3.225-.663.2t-.637-.3l-2.3-2.25q-.3-.3-.3-.7t.3-.7q2.2-2.375 5.075-3.562T12 8"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}