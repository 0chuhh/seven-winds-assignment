import {FC, ImgHTMLAttributes} from 'react'

export type IIconProps = ImgHTMLAttributes<HTMLImageElement>;

export const Icon:FC<IIconProps> = ({...restProps}) => {
    return (
        <img {...restProps} />
    )
}