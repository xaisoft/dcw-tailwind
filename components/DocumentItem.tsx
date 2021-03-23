import React from 'react'
import { IDocument } from '../types'

function DocumentItem({ document }: { document: IDocument }) {
  return (
    <li className="flex items-center space-x-2">
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
      <a className="text-blue-600" href={document.Psath}>
        {document.Name}
      </a>
    </li>
  )
}

export default DocumentItem
