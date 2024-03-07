import FocusTrap from "focus-trap-react"
import { createRef, useState } from "react"
import Draggable from 'react-draggable'

const Window = ({ title, children }) => {
    const [visible, setVisible] = useState(true)
    const [hasFocus, setHasFocus] = useState(false)

    const windowRef = createRef()
    const handleCloseClick = () => {
        setVisible(false)
    }

    // if (!visible) {
    //     return
    // }

    return (
        <>
            <Draggable handle=".drag-handle" bounds="parent">
                <div onBlur={() => setHasFocus(false)} onFocus={() => setHasFocus(true)} ref={windowRef} onClick={() => setHasFocus(true)} className='bg-white border rounded w-2/4 focus:border-black' tabIndex={0} >
                    <FocusTrap active={hasFocus} focusTrapOptions={{ clickOutsideDeactivates: true, allowOutsideClick: true }} >
                        <div>
                            <div className="flex border-b">
                                <h1 onClick={() => windowRef.current.focus()} className='drag-handle grow text-md font-bold p-3 cursor-move'>{title}</h1>
                                <button className="flex items-center px-3" onClick={handleCloseClick} tabIndex={-1}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"></path></svg>
                                </button>
                            </div>
                            <div className="p-3">
                                {children}
                            </div>
                        </div>
                    </FocusTrap>
                </div >
            </Draggable >
        </>
    )
}

export default Window