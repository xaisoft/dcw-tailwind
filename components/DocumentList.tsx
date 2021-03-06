import React from 'react'
import { IDocument } from '../types'
import DocumentItem from './DocumentItem'



function DocumentList({ documents }: { documents: IDocument[] }) {
  return (
    <section id="documents" className="p-4 bg-blue-50">
      <h2 className="uppercase text-2xl font-bold mb-2">Documents</h2>
      <ul className="space-y-4">
        {documents.map((document) => (
          <DocumentItem key={document.DocumentWebId} document={document} />
        ))}
      </ul>
    </section>
  )
}

export default DocumentList
