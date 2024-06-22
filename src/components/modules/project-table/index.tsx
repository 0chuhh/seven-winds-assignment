import React, { FC } from 'react';
import { IRow } from 'models/row';
import styles from './styles.module.scss';
import { TreeView } from './tree-view';

export interface IProjectTableProps {
    rows: IRow[];
}

export const ProjectTable: FC<IProjectTableProps> = React.memo(({ rows }) => {
    return (
        <div className={styles.tree}>
            <div className={styles.treeHead}>
                <div>Уровень</div>
                <div>Наименование работ</div>
                <div>Основная з/п</div>
                <div>Оборудование</div>
                <div>Накладные расходы</div>
                <div>Сметная прибыль</div>
            </div>
            <TreeView rows={rows}/>
        </div>
    );
});