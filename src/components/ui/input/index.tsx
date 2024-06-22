import { OutlinedInput, OutlinedInputProps, TextField, TextFieldProps } from '@mui/material';
import React, {FC} from 'react'
import styles from './styles.module.scss';

export type IInputProps = OutlinedInputProps 

export const Input:FC<IInputProps> = (props) => {
    return (
        <OutlinedInput classes={{
            input:styles.input,
            root:styles.input,
            focused:styles.input,

        }} 
        {...props}/>
    )
}