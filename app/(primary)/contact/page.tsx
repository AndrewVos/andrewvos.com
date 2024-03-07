import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - andrewvos.com',
};

export default function Hire() {
  return (
    <div className="container mx-auto p-3 mt-10 mb-5">
      <div className="w-full lg:w-1/2 mx-auto">
        <h1 className="text-4xl text-gray-800 font-bold mb-5">
          Contact Andrew Vos
        </h1>
        <Link className='underline' href="mailto:andrew@andrewvos.com">andrew@andrewvos.com</Link>
      </div>
    </div>
  )
}
