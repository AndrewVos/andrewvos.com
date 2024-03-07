import { Metadata } from 'next';
import Desktop from "./desktop";

export const metadata: Metadata = {
    title: 'Terminal - andrewvos.com',
};

export default function Page() {
    return <div className='h-full'>
        <Desktop />
    </div>
}