
import { useState } from "react";
import AboutSection from "../components/AboutSection";
import DocumentList from "../components/DocumentList";
import FormList from "../components/FormList";
import Header from "../components/Header";
import MilestoneList from "../components/MilestoneList";


export default function Home({ data: { Data } }) {
 

  return (
    <div className="text-gray-900 bg-gray-50">

      <Header officialCaseName={Data.OfficialCaseName} forms={Data.CaseForms}/>
      
      <div className="container max-w-6xl mx-auto p-8 flex flex-col space-y-4">
        
        <AboutSection/>
        
        <MilestoneList milestones={Data.CaseWebsiteMilestones}/>

        <DocumentList documents={Data.CaseWebsiteDocuments}/>

        <FormList forms={Data.CaseForms}/>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://apiwww.simpluris.com/api/case?caseUrl=acmesettlement.com&lang=us"
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
