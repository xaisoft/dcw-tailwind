import React from 'react'

function FormItem({form}) {
    return (
        <li className="flex items-center hover:bg-gray-300">
              
              <a className="text-blue-600" href={`/forms/${form.WebFormId}`}>
                {form.WebsiteLinkTitle}
              </a>
            </li>
    )
}

export default FormItem
