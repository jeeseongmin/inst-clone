import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className='h-screen overflow-y-scroll bg-gray-50 scrollbar-hide'>
      <Head>
        <title>Instagram 2.0 Youtube</title>
        <meta name='description' content='This is INSTAGRAM 2.0 BUILD' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Feed />
      <Modal />

      {/* Modal */}
    </div>
  );
}
