'use client'

import { useEffect, useState } from 'react';

import Terminal from './terminal';

export default function Desktop() {
    const [windows, setWindows] = useState([])
    const [focusedWindow, setFocusedWindow] = useState(0)

    const handleWindowFocus = (index) => {
        setFocusedWindow(index)
    }

    const handleTerminalClick = () => {
        setWindows((w => ([...w, <Terminal x={30} y={30} />])))
    }

    return (
        <div className='relative h-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600'>
            <div className='gap-3'>
                <button className="" onClick={handleTerminalClick}>
                    <div className='w-24 h-24'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full' viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 8.5L11 10l-3 3l3 3l-1.5 1.5L5 13zm5 9L13 16l3-3l-3-3l1.5-1.5L19 13zM21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 18H3V6h18z"></path></svg>
                    </div>
                    <div className='border p-1'>
                        Terminal
                    </div>
                </button>
            </div>
            {windows}
        </div>
    )
}