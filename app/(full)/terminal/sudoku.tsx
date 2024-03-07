import Window from './window'

export default function Sudoku() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Window title="Sudoku">
            <div className='p-3'>
                <div className='grid gap-1 grid-cols-9 divide'>
                    {numbers.map((row) => (
                        numbers.map((col) => (
                            <button key={`${row}:${col}`} className='flex items-center text-center'>{`${row}:${col}`}
                            </button>
                        ))
                    ))}
                </div>
            </div>
        </Window>
    )
}