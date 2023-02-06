import React, { FC } from 'react'

// components
import { Button, Box } from '@material-ui/core'

// styles
import styles from './Steper.module.css'

type PropsType = {
    currentStep: number
    handleNextStepClick: () => void
    handlePrevStepClick: () => void
}

const Steper: FC<PropsType> = ({
    handleNextStepClick,
    currentStep,
    handlePrevStepClick,
}) => (
    <div className={styles.steperContainer}>
        <div className={styles.steper}>
            <div
                className={styles.steperLine}
                style={{ width: `${(currentStep + 1) * 20}%` }}
            />
        </div>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100',
            }}
        >
            <Button variant="contained" onClick={handlePrevStepClick}>
                Prev
            </Button>
            <Button variant="contained" onClick={handleNextStepClick}>
                Next
            </Button>
        </Box>
    </div>
)

export default Steper