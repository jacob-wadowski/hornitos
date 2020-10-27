import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.center} ${utilStyles.headingMd}`}>
        <p>You want a cut?</p>
        <Link href='/services'>
          <Button variant='contained' color='primary'>BOOK A CUT</Button>
        </Link>
      </section>
    </Layout>
  )
}