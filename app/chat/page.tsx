'use client'

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const chatDelay = 12000

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
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <input type="text" value={inputText} placeholder="Type your message here" onChange={(e) => setInputText(e.target.value)} className="border w-full px-2 py-0" autoFocus></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default function Page() {
    const [playingMyVideo, setPlayingMyVideo] = useState(false)
    const [playingUserVideo, setPlayingUserVideo] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setPlayingMyVideo(true)
        }, 2000)
    }, [])

    useEffect(() => {
        const video: HTMLVideoElement | null = document.querySelector("#videoElement") as HTMLVideoElement;

        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                    setPlayingUserVideo(true)
                })
                .catch(function (err0r) {
                    console.log(err0r)
                    console.log("Something went wrong!");
                });
        }
    })

    return (
        <div className="font-serif p-3 h-full flex flex-col space-y-3" >
            <div className="">
                <div className="">
                    <div className="relative md:grid grid-cols-2 auto-cols-fr gap-3">
                        <div className="flex justify-center items-center bg-gray-900">
                            <video className={playingMyVideo ? "" : "hidden"} controls={false} autoPlay={true} muted playsInline >
                                {playingMyVideo && (<source src="/videos/me.webm" type="video/webm" />)}
                                {playingMyVideo && (<source src="/videos/me.mp4" type="video/mp4" />)}
                            </video>
                            {playingMyVideo || (
                                <div className="p-3">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            )}
                        </div>
                        <div className="absolute bottom-0 right-0 md:static w-1/3 md:w-full flex justify-center items-center bg-gray-900">
                            <video id="videoElement" className={playingUserVideo ? "" : "hidden"} controls={false} autoPlay={true} muted playsInline >
                            </video>
                            {playingUserVideo || (
                                <div className="p-3">
                                    <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>

                            )}

                        </div>
                    </div>
                </div>
            </div>

            <Chat />
        </div>
    )
}