
import { Metadata } from "next"
import Layout from "./layout"
import Call from "./call"


export const metadata: Metadata = {
    title: 'Chat - andrewvos.com',
};

export default function Page() {
    return <Call />
}

Page.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
