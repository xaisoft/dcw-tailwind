import React from 'react'
import { IForm } from '../types'

function FormItem({form}:{form:IForm}) {
    return (
        <li className="flex items-center hover:bg-gray-300">
              
              <a className="text-blue-600" href={`/forms/${form.WebFormId}`}>
                {form.WebsiteLinkTitle}
              </a>
            </li>
    )
}

export default FormItem
