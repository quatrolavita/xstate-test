import React, { FC, ReactNode } from 'react'

// styles
import styles from './Container.module.css'

type PropsType = {
    children: ReactNode
}

const Container: FC<PropsType> = ({ children }) => (
    <div className={styles.container}>{children}</div>
)

export default Container
