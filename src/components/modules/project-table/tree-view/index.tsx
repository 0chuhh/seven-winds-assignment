import { IRow } from 'models/row';
import React, { FC } from 'react';
import { TreeNode } from './tree-node';
import styles from './styles.module.scss';

export interface ITreeRowsProps {
    deepLevel?: number;
    rows: IRow[];
    editingMode?: boolean;
}

export const TreeView: FC<ITreeRowsProps> = React.memo(({ rows, deepLevel = 0, editingMode = false }) => {
    return (
        <div className={styles.treeView}>
            {
                rows.map(r => (
                    <TreeNode editingMode={editingMode} key={r.id} deepLevel={deepLevel} row={r} />
                ))
            }
        </div>
    );
});