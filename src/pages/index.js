import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import { Grid } from '@material-ui/core';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Portfolio />
    </Layout>
  );
}
