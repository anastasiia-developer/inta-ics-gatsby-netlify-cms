import React from 'react'
import Layout from '../components/Layout'
import styled from "styled-components";

const Continer = styled.div`
    background: blue;
`;

const NotFoundPage = () => (
  <Layout>
    <Continer>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Continer>
  </Layout>
)

export default NotFoundPage
