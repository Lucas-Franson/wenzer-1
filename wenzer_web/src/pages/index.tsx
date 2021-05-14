import React from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Paper } from '@material-ui/core';
import { useStyles } from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Head>
        <title>Wenzer</title>
      </Head>
      <Paper className={classes.root} elevation={20}>
        <form className={classes.formLogin}>
          <h1>Log-in</h1>
          <input type="email" required placeholder="E-mail" />
          <input type="password" required placeholder="Senha" />
          <button type="submit" >Sign in</button>
        </form>
      </Paper>
    </Layout>
  );
}
