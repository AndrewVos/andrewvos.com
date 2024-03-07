import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Success - andrewvos.com',
};

export default function Success() {
    return (
        <div className="container mx-auto p-3 mt-10 mb-5">
            <div className="w-full lg:w-1/2 mx-auto">
                <h1 className="text-4xl text-black">
                    Thanks
                </h1>
                <p className="text-lg text-black">
                    Thanks for your enquiry.
                </p>
            </div>
        </div>
    )
}
