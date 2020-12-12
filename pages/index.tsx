import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { Home } from '../features/home'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Yield Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
        <h1 className="title">
          Read <Link href="/another-page">page</Link>
        </h1>
      </main>
    </Layout>
  )
}
