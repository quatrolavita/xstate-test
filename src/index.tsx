import React from 'react'
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client'

import { inspect } from '@xstate/inspect'
// components
import DefaultSteperPage from 'pages/DefaultSteperPage/DefaultSteperPage'
// import XStateSteperPage from 'pages/XStateSteperPage/XStateSteperPage'

// eslint-disable-next-line import/extensions
import './index.css'

inspect({ iframe: false })
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/* <XStateSteperPage /> */} <DefaultSteperPage />
    </React.StrictMode>
)
