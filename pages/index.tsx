import Head from 'next/head'
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
      </main>
    </Layout>
  )
}
