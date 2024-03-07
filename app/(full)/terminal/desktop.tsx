'use client'

import { useState } from 'react';

import Terminal from './terminal';
import Sudoku from './sudoku';


const DesktopIcon = ({ title, icon, onClick }) => {
    return (
        <button className="" onClick={onClick}>
            <div className='w-24 h-24'>
                {icon}
            </div>
            <div className='border p-1'>
                {title}
            </div>
        </button>
    )
}

export default function Desktop() {
    const [windows, setWindows] = useState([])

    const terminalIcon = <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 8.5L11 10l-3 3l3 3l-1.5 1.5L5 13zm5 9L13 16l3-3l-3-3l1.5-1.5L19 13zM21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H3V6h18z"></path></svg>
    const sudokuIcon = <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 24 24"><path fill="currentColor" d="M12 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2M6 16c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m12 12c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></path></svg>

    const render = (name: string, key: number) => {
        if (name === "terminal") {
            return <Terminal key={key} />
        } else if (name === "sudoku") {
            return <Sudoku key={key} />
        }
    }

    return (
        <div className='relative h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'>
            <div className='gap-3'>
                <DesktopIcon title='Terminal' icon={terminalIcon} onClick={() => setWindows(w => ([...w, "terminal"]))} />
                <DesktopIcon title='Sudoku' icon={sudokuIcon} onClick={() => setWindows(w => ([...w, "sudoku"]))} />
            </div>
            {windows.map((w, i) => (
                render(w, i)
            ))}
        </div>
    )
}