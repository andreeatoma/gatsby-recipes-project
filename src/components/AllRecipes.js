import React from 'react';
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    allContentfulRecipe(sort: {order: ASC, fields: title}) {
      nodes {
        id
        title
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllRecipes = () => {
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes;

    return (
        <section className='recipes-container'>
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    )
}

export default AllRecipes