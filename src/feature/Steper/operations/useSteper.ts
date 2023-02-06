import { useCallback, useState } from 'react'

export const useSteper = (stepLenght: number) => {
    const [currentStep, setStep] = useState(0)

    const handlePrevStepClick = useCallback(() => {
        if (currentStep === 0) return

        setStep(currentStep - 1)
    }, [currentStep])

    const handleNextStepClick = useCallback(() => {
        if (currentStep === stepLenght - 1) return
        setStep(currentStep + 1)
    }, [currentStep, stepLenght])

    return { handlePrevStepClick, handleNextStepClick, currentStep }
}
