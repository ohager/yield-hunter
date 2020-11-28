import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout";
import Hero from "../components/hero";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Hero bg='/img/farmland.small.png'/>
                <h1 className="title">
                    Read <Link href="/another-page">page</Link>
                </h1>
            </main>
        </Layout>
    )
}
