import React, { ReactElement } from 'react'
import { GetStaticProps, GetServerSideProps } from 'next'
import { ILoginForm } from '../../types'
import Head from 'next/head'
import Layout from '../../components/Layout'
interface Props {

}

function Index({ data }: { data: ILoginForm }): ReactElement {

  return (
    <Layout title={data?.Title}>
   
   
    <div className="container flex flex-col justify-center h-screen p-8">
      <div className="p-8 space-y-4 max-w-lg mx-auto bg-blue-100 flex flex-col justify-center items-center">

        <h1 className="text-4xl">{data?.Title}</h1>

        <div className="flex items-center">
          <label htmlFor="simid" className="font-bold mr-2 w-20 text-right inline-block">{data?.AuthColumn1Title}</label>
          <input name="simid" type="text" className="p-2 rounded outline-none focus:ring-1" />

        </div>
        <div  className="flex items-center">
          <label htmlFor="lastName" className="font-bold mr-2 w-20  inline-block">{data?.AuthColumn2Title}</label>
          <input name="lastName" type="text" className="p-2 rounded outline-none focus:ring-1" />
        </div>

        <button className="rounded hover:bg-blue-900 bg-blue-600 text-white px-8 py-2" onClick={() => alert("l")}>Login</button>
      </div>

    </div>
    </Layout>
  )
}

export default Index


export const getServerSideProps: GetServerSideProps = async (context) => {

  const response = await fetch(
    `https://apiwww.simpluris.com/api/case/login-form?webId=f671c262-ce28-42f8-942c-4955d015b065&webFormId=${context.query.webFormId}`
  );

  const data = await response.json();
  return {
    props: {
      data
    },
  };
}
