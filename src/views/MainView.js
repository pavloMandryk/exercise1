import React from 'react'
import { Layout } from '@tecommons/ui'
import Header from '../components/Header'

const MainView = ({children}) => {
    return (
        <>
          <Header />
          <Layout>
            { children }
          </Layout>
        </>
    )
}

export default MainView
