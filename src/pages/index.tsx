import Head from 'next/head';
import Feed from '../components/feed/Feed';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Adil Rasiyani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />
      {/* Modal */}

    </div>
  )
}
