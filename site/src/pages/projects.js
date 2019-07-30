import React from "react"
import { Link,StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
    <StaticQuery
        query={graphql`
     {
        allProjectsJson {
          edges{
          node{
          title
          }
          }
        }
     }
    `}
        render={data => (
            <Layout>
                <SEO title="Yixiao Chen's work project, as a front end web developer" />
                <>
                <ul>{getProjects(data)}</ul>
                </>
                <Link to="/">Go back to the homepage</Link>

            </Layout>

        )}
    />

);

function getProjects(data) {
    const projectsArray = [];
    data.allProjectsJson.edges.forEach(item=>
        projectsArray.push(<li key={item.node.title}>{item.node.title}</li>)
    );
    return projectsArray;
}

export default Projects