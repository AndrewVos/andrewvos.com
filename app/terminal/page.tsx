import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terminal - andrewvos.com',
};


const ls = () => {
    ``
}

const commands = [
    { name: 'ls', command: ls }
]

const parseInput = (input: string) => {
    return input.split()
}

export default function Page() {
    const entry = (
        <div className='flex gap-3'>
            <span>
                <span className='text-green-500'>vos@web-server</span>:<span className='text-blue-500'>~</span>$
            </span>
            <input type='text' autoFocus className='focus:outline-none grow' />
        </div>
    )

    const lines = []

    return (
        <div className='p-3'>
            <div className='border'>
                <h1 className='text-md font-bold p-3 border-b'>Terminal</h1>
                <div className='text-lg font-mono p-3'>
                    {lines.map((line, i) =>
                        <div key={i}>{line}</div>
                    )}
                    {entry}
                </div>
            </div>
        </div >
    );
}
