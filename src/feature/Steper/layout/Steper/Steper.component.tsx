import React, { FC } from 'react'

// components
import { Button, Box } from '@material-ui/core'
// hooks
import { useSteper } from 'feature/Steper/operations/useSteper'

// styles
import styles from './Steper.module.css'

type PropsType = {
    handleChangeStep: (index: number) => void
}

const Steper: FC<PropsType> = ({ handleChangeStep }) => {
    const { handleNextStepClick, handlePrevStepClick, currentStep } = useSteper(
        5,
        handleChangeStep
    )

    return (
        <div className={styles.steperContainer}>
            <div className={styles.steper}>
                <div
                    className={styles.steperLine}
                    style={{ width: `${currentStep * 10}%` }}
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
}

export default Steper
