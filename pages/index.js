import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook Clone</title>
      </Head>

      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        {/* Widget */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}