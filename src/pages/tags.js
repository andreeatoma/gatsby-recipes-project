import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import setupTags from '../utils/setupTags'
import SEO from '../components/SEO'

const Tags = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  const newTags = setupTags(recipes);
  return (
    <Layout>
      <SEO title='Tags' />
      <main className='page'>
        <section className='tags-page'>
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            return <Link key={index} to={`/${text}`} className='tag'>
              <h4>{text}</h4>
              <p>{value} recipe</p>
            </Link>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
