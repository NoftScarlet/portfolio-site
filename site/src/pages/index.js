import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Yixiao Chen's portfolio, as a front end web developer" />
    <h1>Who is Yixiao?</h1>
    <p>I am Yixiao. Nice to meet you!</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);
export default IndexPage
