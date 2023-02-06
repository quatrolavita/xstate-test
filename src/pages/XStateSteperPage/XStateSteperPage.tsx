import React from 'react'

import { useMachine } from '@xstate/react'
import Steper from 'feature/XStateSteper/layout/Steper.component'
import { steperMachine } from 'feature/XStateSteper/operation/steperMachine'
import Container from 'shared/components/Container/Container.component'

import Step1 from '../DefaultSteperPage/Steps/Step1'
import Step2 from '../DefaultSteperPage/Steps/Step2'
import Step3 from '../DefaultSteperPage/Steps/Step3'
import Step4 from '../DefaultSteperPage/Steps/Step4'
import Step5 from '../DefaultSteperPage/Steps/Step5'

const XStateSteperPage = () => {
    const [{ context }, send] = useMachine(steperMachine, { devTools: true })

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
            {renderPage(context.index)}
            <Steper
                handlePrevStepClick={() => send('PREV_STEP')}
                handleNextStepClick={() => send('NEXT_STEP')}
                currentStep={context.index}
            />
        </Container>
    )
}

export default XStateSteperPage
