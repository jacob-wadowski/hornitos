import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Service from '../components/service'

const services = [
  {name: 'Haircut', cost: 25},
  {name: 'Beard Trim', cost: 5},
  {name: 'Beer During Cut', cost: 1}
]

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Chris Cuts Services</title>
      </Head>
      <h1>Services List</h1>
      {services.map((service) => {
        return (
          <Service name={service.name} cost={service.cost} />
        )
      })}
    </Layout>
  )
}