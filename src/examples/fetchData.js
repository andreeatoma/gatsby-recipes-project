import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
query FirstQuery {
  site {
    info: siteMetadata {
      title
      description
      author
      person {
        name
        age
      }
      simpleData
      complexData {
        name
        age
      }
    }
  }
}
`
const FetchData = () => {
    const { site: { info: { title, person: { name, age } } } } = useStaticQuery(getData)
    return (
        <div>
            {/* <h2>Name: {data.site.info.person.name}</h2>
             */}
            <h2> site title is : {title} </h2>
            <h4>Name of the person is: {name}</h4>
        </div>
    )
}

export default FetchData