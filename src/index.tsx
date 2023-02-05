import React from 'react'
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client'

// components
import DefaultSteperPage from 'pages/DefaultSteperPage/DefaultSteperPage'

// eslint-disable-next-line import/extensions
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <DefaultSteperPage />
    </React.StrictMode>
)
