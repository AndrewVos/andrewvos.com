'use client'

import { useState } from "react"
import Window from "./window"

const files = [
    { type: "file", path: '/file1.txt', contents: "hello" },
    { type: "directory", path: '/stuff' },
    { type: "file", path: '/stuff/notes.txt', contents: "hello" },
]

const ls = ({ args, cwd }) => {
    return files.filter((f) => {
        if (f.type === "file") {
            console.log({ dirname: dirname(f.path), cwd })
            return dirname(f.path) == cwd
        } else {
            // console.log({ cwd })
            // console.log(f.path)
            // console.log(dirname(f.path))
            return dirname(f.path) == cwd
        }
    }).map(f => basename(f.path))
}

const cd = ({ args, cwd, setCwd }) => {
    if (args.length === 0) {
        setCwd("/")
    } else {
        const possibleDirectories = files.filter(f => f.type === "directory").map(f => f.path)
        const newCwd = [cwd, args[0]].join("")
        console.log({ possibleDirectories, newCwd })
        if (possibleDirectories.includes(newCwd)) {
            setCwd(newCwd)
            console.log("changed cwd to", newCwd)
        }
    }
}

const clear = ({ setLines }) => {
    setLines([])
    return []
}

const pwd = ({ cwd }) => {
    return [cwd]
}

const commands = {
    "ls": ls,
    "cd": cd,
    "clear": clear,
    "pwd": pwd
}

const basename = (path: string) => {
    const parts = path.split("/")
    return parts[parts.length - 1]
}

const dirname = (path: string) => {
    const parts = path.split("/")
    parts.pop()
    const result = parts.join("/")
    console.log({ path, result })

    return result
}


export default function Terminal() {
    const [lines, setLines] = useState([
        "UNAUTHORIZED ACCESS TO THIS DEVICE IS PROHIBITED",
        "You must have explicit, authorized permission to access or configure this device. Unauthorized attempts and actions to access or use this system may result in civil and/or criminal penalties. All activities performed on this device are logged and monitored."
    ])
    const [input, setInput] = useState('')
    const [cwd, setCwd] = useState('/')

    const evaluateInput = () => {
        let args = input.split(" ")
        if (args.length === 0) { return }

        const commandName = args.shift()

        const command = commands[commandName]

        setLines((l) => [
            ...l,
            (
                <div className='flex gap-3' key={l.length}>
                    <span>
                        <span className='text-green-500'>vos@web-server</span>:<span className='text-blue-500'>~</span>$
                        <span>&nbsp;{input}</span>
                    </span>
                </div>
            )
        ])

        if (command) {
            const result = command({ args, cwd, setCwd, setLines })
            if (result) {
                setLines((l) => [...l, ...result])
            }
        } else {
            setLines((l) => [...l, `Command not found: ${commandName}`])
        }
        setInput("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        evaluateInput()
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <Window title="Terminal">
            <div className='text-lg font-mono p-3'>
                <div className="">
                    {lines.map((line, i) =>
                        <div key={i}>{line}</div>
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-3'>
                        <span>
                            <span className='text-green-500'>vos@web-server</span>:<span className='text-blue-500'>~</span>$
                        </span>
                        <input type='text' autoFocus className='focus:outline-none grow' value={input} onChange={handleInputChange} />
                    </div>
                </form>
            </div>
        </Window >
    );

}