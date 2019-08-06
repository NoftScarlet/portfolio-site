import React from "react"
import { Link,StaticQuery, graphql } from "gatsby"
import {Row, Col} from "reactstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavCards from "../components/nav-cards"
import ProjectDetails from "../components/project-details"

const Portfolio = () => (
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
                    <Row>
                        <Col md="6">
                            <ProjectDetails title={} description={} img={} type={} source_code={} />
                        </Col>
                        <Col md="6">
                            <NavCards />
                        </Col>
                    </Row>

                </>
                <Link to="/">Go back to the homepage</Link>

            </Layout>

        )}
    />

);


export default Portfolio