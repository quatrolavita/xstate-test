import React from 'react'

// components
import Steper from 'feature/Steper/layout/Steper/Steper.component'
import { useSteper } from 'feature/Steper/operations/useSteper'
import Container from 'shared/components/Container/Container.component'

import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import Step4 from './Steps/Step4'
import Step5 from './Steps/Step5'

const DefaultSteperPage = () => {
    const { handleNextStepClick, handlePrevStepClick, currentStep } =
        useSteper(5)

    const renderPage = (index: number) => {
        switch (index) {
            case 1:
                return <Step2 />
            case 2:
                return <Step3 />
            case 3:
                return <Step4 />
            case 4:
                return <Step5 />
            default:
                return <Step1 />
        }
    }

    return (
        <Container>
            {renderPage(currentStep)}
            <Steper
                handleNextStepClick={handleNextStepClick}
                handlePrevStepClick={handlePrevStepClick}
                currentStep={currentStep}
            />
        </Container>
    )
}

export default DefaultSteperPage
