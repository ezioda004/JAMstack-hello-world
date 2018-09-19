import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World;</h1>
    <p>I'm Aditya,</p>
    <p>I've learned a lot from fcc, I've complete frontend nanodegree as a part of Google-Udacity scholarship and now learning backend.</p>
    <p><a href = "https://ezioda004.github.io">My portfolio</a></p> 
    <p>Looking forward to my 1st hackathon!!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
