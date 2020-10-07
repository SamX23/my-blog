import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

import utilStyles from '../styles/utils.module.css'
import { Heading }from "@chakra-ui/core"


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>  
          A front-end web developer as hobbiest (yet), this blog is created by{" "}
          <a href="http://reactjs.org/">React</a>{" "}
          library,{" "}
          <a href="https://nextjs.org/">Next</a>{" "}
          framework using{" "}
          <a href="https://www.typescriptlang.org/">typescript</a>.</p>
         <p>
          Or you can see me doing code on my github{" "}
          <a href="https://github.com/SamX23">Github Profile</a>, while living in social network on <a href="https://facebook.com/samikalamallah">facebook</a>.
        </p>
        </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Heading size="lg" lineHeight={1.4} my='1rem'>Blog</Heading>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
