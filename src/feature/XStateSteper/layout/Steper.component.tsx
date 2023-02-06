import React, { FC } from 'react'

// components
import { Button } from '@material-ui/core'

// styles
import styles from './Steper.module.css'

type PropsType = {
    currentStep: number
    handleNextStepClick: any
    handlePrevStepClick: any
}

const XStateSteper: FC<PropsType> = ({
    handlePrevStepClick,
    handleNextStepClick,
    currentStep,
}) => (
    <div className={styles.steperContainer}>
        <div className={styles.steper}>
            <div
                className={styles.steperLine}
                style={{ width: `${(currentStep + 1) * 20}%` }}
            />
        </div>
        <div className={styles.buttonWrapper}>
            <Button variant="contained" onClick={handlePrevStepClick}>
                Prev
            </Button>
            <Button variant="contained" onClick={handleNextStepClick}>
                Next
            </Button>
        </div>
    </div>
)

export default XStateSteper
