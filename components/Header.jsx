import React,{useState} from 'react'

function Header({officialCaseName,forms}) {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <header className="relative bg-blue-200 p-8 flex justify-between items-center">
        <h1 className="text-xl font-bold">{officialCaseName}</h1>
        <nav>
          <ul className="hidden lg:flex space-x-2">
            <li className="bg-blue-400 font-bold p-2 hover:bg-blue-600 ">
              <a href="#">Home</a>
            </li>
            <li className="bg-blue-400 font-bold p-2 hover:bg-blue-600">
              <a href="#">Contact</a>
            </li>
            {forms.map((form) => (
              <li key={form.WebFormId} className="bg-blue-400 font-bold  p-2 hover:bg-blue-600">{form.WebsiteLinkTitle}</li>
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
            {forms.map((form) => (
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
            
        
    )
}

export default Header
