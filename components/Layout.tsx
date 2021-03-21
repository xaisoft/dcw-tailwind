import React, { ReactElement } from 'react'
import Head from 'next/head'

function Layout({ children, title }:{children:any,title:string}): ReactElement {
    return (
        <div className="text-gray-900 bg-gray-50">
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
}

export default Layout
