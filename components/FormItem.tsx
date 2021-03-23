import React from 'react'
import Link from 'next/link';
import { IForm } from '../types'

function FormItem({form}:{form:IForm}) {
    return (
        <li className="flex items-center hover:bg-gray-300">
              <Link as={`/form/${form.WebFormId}`} href={'/form/[webFormId]'}>
              <a className="text-blue-600">
                {form.WebsiteLinkTitle}
              </a>
              </Link>
              
            </li>
    )
}

export default FormItem
