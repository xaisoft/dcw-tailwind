import React from 'react'
import { IForm } from '../types'
import FormItem from './FormItem'

function FormList({forms}:{forms:IForm[]}) {
    return (
        <section id="forms" className="p-4">
        <h2 className="uppercase text-2xl font-bold mb-2">Forms</h2>
        <ul className="space-y-2">
          {forms.map((form) => (
            <FormItem key={form.WebFormId} form={form}/>
          ))}
        </ul>
      </section>
    )
}

export default FormList
