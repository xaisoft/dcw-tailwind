import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home({ data: { Data } }) {
  console.log(Data)
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="text-gray-900">

      <header className="relative bg-blue-200 p-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">{Data.OfficialCaseName}</h1>
        <nav>
          <ul className="hidden lg:flex space-x-2">
            <li className="bg-blue-400 text-white font-bold p-2 hover:bg-blue-600 ">
              <a href="#">Home</a>
            </li>
            <li className="bg-blue-400 text-white font-bold p-2 hover:bg-blue-600">
              <a href="#">Contact</a>
            </li>
            {Data.CaseForms.map((form) => (
              <li key={form.WebFormId} className="bg-blue-400 text-white font-bold  p-2 hover:bg-blue-600">{form.WebsiteLinkTitle}</li>
            ))}
          </ul>
          <button aria-label="Open Menu" className="lg:hidden" onClick={()=>setIsOpen(!isOpen)}>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
        <div id="mobileMenu" className={`${isOpen ? "block": "hidden"} absolute bg-green-400 right-0  top-24 lg:hidden p-8 flex justify-between items-start
        `}>
   
        <ul className="">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            {Data.CaseForms.map((form) => (
              <li key={form.WebFormId}>{form.WebsiteLinkTitle}</li>
            ))}
          </ul>
          <button aria-label="Close Menu" onClick={()=> {setIsOpen(false)}}>
        <svg className="w-4 x-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>
        </button>
        </div>
      </header>
      <div className="container bg-gray-50 max-w-6xl mx-auto p-8 flex flex-col space-y-4">
        <button className="rounded font-bold px-8 py-6 bg-purple-700 text-purple-100 text-4xl uppercase hover:bg-purple-900">
          Submit Claim
        </button>

        <section id="about" className=" bg-red-200 p-4">
          <h2 className="uppercase text-2xl font-bold mb-2">About This Case</h2>
          <p
            className="space-y-4 tracking-wide leading-relaxed"
            dangerouslySetInnerHTML={{__html: Data.CaseWebsiteContent[1].Content
            }}
          ></p>
        </section>

        <section id="milestones" className=" bg-green-400 p-4">
          <h2 className="uppercase text-2xl font-bold mb-2">Milestones</h2>
          <ul className="space-y-4">
            {Data.CaseWebsiteMilestones.map((x) => (
              <li key={x.MilestoneWebId}>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <div>{x.WebName}</div>
                  <div>04/11/2022</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="documents" className="p-4">
          <h2 className="uppercase text-2xl font-bold mb-2">Documents</h2>
          <ul className="space-y-4">
            {Data.CaseWebsiteDocuments.map((x) => (
              <li key={x.DocumentWebId} className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <a className="text-blue-600" href={x.Path}>
                  {x.Name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="documents" className="p-4">
          <h2 className="uppercase text-2xl font-bold mb-2">Forms</h2>
          <ul className="">
            {Data.CaseForms.map((x) => (
              <li key={x.WebFormId} className="flex items-center hover:bg-gray-300 py-4  px-1">
                
                <a className="text-blue-600" href={`/forms/${x.WebFormid}`}>
                  {x.WebsiteLinkTitle}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://apiwww.simpluris.com/api/case?caseUrl=acmesettlement.com&lang="
  );

  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
