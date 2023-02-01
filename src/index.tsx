import React from 'react'
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client'

// components
import Steper from 'feature/Steper/layout/Steper/Steper.component'
import Container from 'shared/components/Container/Container.component'

// eslint-disable-next-line import/extensions
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Container>
            <Steper />
        </Container>
    </React.StrictMode>
)
