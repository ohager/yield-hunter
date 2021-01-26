import Head from 'next/head'
import { useRouter } from 'next/router'
import { Farm } from '../../features/farm'
import Layout from '../../components/layout'

export default function FarmPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Head>
        <title>Yield Hunter - Farm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Farm id={id as string} />
      </main>
    </Layout>
  )
}
