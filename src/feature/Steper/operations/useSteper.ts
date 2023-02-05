import { useCallback, useState } from 'react'

export const useSteper = (
    stepLenght: number,
    callback: (index: number) => void
) => {
    const [currentStep, setStep] = useState(0)

    const handlePrevStepClick = useCallback(() => {
        if (currentStep === 0) return

        setStep(currentStep - 1)
        callback(currentStep - 1)
    }, [currentStep, callback])

    const handleNextStepClick = useCallback(() => {
        if (currentStep === stepLenght - 1) return
        setStep(currentStep + 1)
        callback(currentStep + 1)
    }, [currentStep, stepLenght, callback])

    return { handlePrevStepClick, handleNextStepClick, currentStep }
}
