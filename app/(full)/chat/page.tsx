
import { Metadata } from "next"
import Call from "./call"


export const metadata: Metadata = {
    title: 'Chat - andrewvos.com',
};

export default function Page() {
    return <Call />
}