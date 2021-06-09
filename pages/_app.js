import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Yoga Mindfulness Life Coaching Services" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <title>The Dreaming Tree</title>
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
