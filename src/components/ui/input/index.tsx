import { OutlinedInput, OutlinedInputProps } from '@mui/material';
import React, {FC} from 'react'
import styles from './styles.module.scss';

export type IInputProps = OutlinedInputProps 

export const Input:FC<IInputProps> = React.memo((props) => {
    return (
        <OutlinedInput classes={{
            input:styles.input,
            root:styles.input,
            focused:styles.input,

        }} 
        {...props}/>
    )
})