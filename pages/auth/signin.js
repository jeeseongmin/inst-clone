import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

// Browser...
function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 text-center px-14'>
        <img
          src='https://links.papareact.com/ocw'
          alt='instgram'
          className='w-80'
        />
        <p className='italic font-xs'>
          This is not a REAL app, it is build for educational purposes only
        </p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 text-white bg-blue-500 rounded-lg'
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
