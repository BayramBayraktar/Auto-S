import Head from 'next/head'
import Header from '../components/header';
import Footer from '../components/footer';

import { Layout } from './style'


const MainLayout = ({ title, children }) => {


  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Layout>
  )
};

export default MainLayout;