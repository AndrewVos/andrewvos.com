import { useCallback, useState } from "react"

const Window = ({ x, y, title, children }) => {
    const [position, setPosition] = useState({
        x,
        y,
        dragging: false,
        dragStartX: null,
        dragStartY: null,
    })

    const [visible, setVisible] = useState(true)

    const handleCloseClick = () => {
        setVisible(false)
    }

    if (!visible) {
        return
    }

    const handleMouseDown = (e) => {
        e.preventDefault();
        setPosition({ x: position.y, y: position.y, dragging: true, dragStartX: e.clientX, dragStartY: e.clientY })
    }

    const handleMouseMove = (e) => {
        e.preventDefault();

        if (position.dragging) {
            setPosition(() => ({
                x: position.x - (position.dragStartX - e.clientX),
                y: position.y - (position.dragStartY - e.clientY),
                dragging: position.dragging,
                dragStartX: e.clientX,
                dragStartY: e.clientY
            }))
        }
    }

    const handleMouseUp = (e) => {
        e.preventDefault();

        setPosition({
            x: position.x,
            y: position.y,
            dragging: false,
        })
    }

    return (
        <div className='bg-white border p-3 rounded absolute w-2/4' style={{ top: `${position.y}px`, left: `${position.x}px` }}>
            <div className="flex border-b">
                <h1 className='grow text-md font-bold p-3 cursor-move' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>{title}</h1>
                <button className="flex items-center px-3" onClick={handleCloseClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"></path></svg>
                </button>
            </div>
            <div>
                {children}
            </div>
        </div >
    )
}

export default Window