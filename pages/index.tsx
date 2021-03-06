
import { useState } from "react";
import { GetStaticProps, GetServerSideProps } from 'next'
import AboutSection from "../components/AboutSection";
import DocumentList from "../components/DocumentList";
import FormList from "../components/FormList";
import Header from "../components/Header";
import MilestoneList from "../components/MilestoneList";
import Layout from "../components/Layout";
import { IData } from "../types";


export default function Home({ data }: { data: IData }) {

  return (
    <Layout title={`${data.OfficialCaseName} - Home`}>
      <Header officialCaseName={data.OfficialCaseName} forms={data.CaseForms} />

      <div className="container max-w-6xl mx-auto p-8 flex flex-col space-y-4">

        <AboutSection />
        <h2>Hello</h2>
        <MilestoneList milestones={data.CaseWebsiteMilestones} />

        <DocumentList documents={data.CaseWebsiteDocuments} />

        <FormList forms={data.CaseForms} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {

  const response = await fetch(
    "https://apiwww.simpluris.com/api/case?caseUrl=revsettlement.com&lang=us"
  );

  const data = await response.json();

  return {
    props: {
      data: data.Data,
    },
  };
}
