import Link from 'next/link'
import { GetStaticPropsContext, NextPage } from 'next/types'
import { Entry, getEntries, getEntry } from '../../graphql/getEntries'
import { getPokemon } from '../../graphql/getPokemon'
// import { getPokemons } from '../../graphql/getPokemons'

interface EntryProp {
    entry: Entry
}

const TestPage: NextPage<EntryProp> = ({ entry }) => {
  return (
    <>
    <div>
      <Link as={'/'} href={'/'}>Home page</Link>
    </div>
    <div className='pt-2'>
      <p>This Page&apos;s info:</p>
      <h1>{entry.title} ({entry.uid})</h1>
      <div>{entry.testField}</div>
      {/* <img src={pokemon.image} /> */}
    </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const entries = await getEntries()

  return {
    paths: entries?.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  }
}

export const getStaticProps = async (context: GetStaticPropsContext<{slug: string}>) => {
  const { slug } = context.params ?? {}
  if (!slug) {
    return null;
  }
  const entry = await getEntry(slug)

  return {
    props: {
      entry,
    },
  }
}

export default TestPage