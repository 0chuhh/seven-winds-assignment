import { Stack } from "@mui/material";
import { FC } from "react";
import { ITreeNodeProps } from "..";
import { Icon } from 'components/ui/icon';
import treeItemIcon from 'assets/icons/tree-item-icon.svg';
import trashIcon from 'assets/icons/trash-icon.svg';
import styles from '../styles.module.scss';

interface ITreeLevelControlProps extends Pick<ITreeNodeProps, 'deepLevel'> {
    onCreate:(event: React.SyntheticEvent)=>void;
    onDelete:(event: React.SyntheticEvent)=>void;
}

export const TreeLevelControl:FC<ITreeLevelControlProps> = ({deepLevel, onDelete, onCreate}) => {
    return (
        <div
            style={{
                paddingLeft: deepLevel * 20
            }}
        >
            <div className={[styles.treeLevel, deepLevel > 0 ? styles.treeLevelDeep : styles.treeLevelTop].join(' ')}>
                <Stack className={styles.icons} direction={'row'} gap={'10px'}>
                    <Icon onClick={onCreate} src={treeItemIcon} />
                    <Icon onClick={onDelete} className={styles.trash} src={trashIcon} />
                </Stack>
            </div>
        </div>
    );
};