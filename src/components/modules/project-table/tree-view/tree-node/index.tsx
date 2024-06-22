import { ClickAwayListener } from '@mui/material';
import { IRow } from 'models/row';
import React, { FC, useCallback, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { TreeView } from '..';

import { Input } from 'components/ui/input';
import { rowAPI } from 'services/row-service';
import { useAppSelector } from 'store/hooks';
import { TreeLevelControl } from './tree-level-control';


export interface ITreeNodeProps {
    deepLevel: number;
    row: IRow;
    editingMode: boolean;
}

export const TreeNode: FC<ITreeNodeProps> = React.memo(({ row, deepLevel, editingMode }) => {
    const { entityId } = useAppSelector(state => state.entity);

    const [createRow] = rowAPI.useCreateRowMutation();

    const [updateRow] = rowAPI.useUpdateRowMutation();

    const [deleteRow] = rowAPI.useDeleteRowMutation();

    const formRef = useRef<HTMLFormElement>(null);



    const [isCreatingMode, setIsCreatingMode] = useState<boolean>(false);

    const [isEditingMode, setIsEditingMode] = useState<boolean>(editingMode);

    const handleCreatingMode = useCallback((event: React.SyntheticEvent) => {
        event.stopPropagation();
        setIsCreatingMode(true);
    }, []);

    const handleChangeMode = useCallback((event: React.SyntheticEvent) => {
        event.stopPropagation();
        setIsEditingMode(true);
    }, []);

    const handleUpdateRow = useCallback((id: number) => async () => {
        if (!formRef.current) return;
        const formData = new FormData(formRef.current);
        const row: IRow = {
            id: id,
            equipmentCosts: Number(formData.get('equipmentCosts')!),
            estimatedProfit: Number(formData.get('estimatedProfit')!),
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: 0,
            mimExploitation: 0,
            overheads: Number(formData.get('overheads')!),
            rowName: formData.get('rowName')! as string,
            salary: Number(formData.get('salary')!),
            supportCosts: 0,
            total: 0,
            child: []
        };
        if (editingMode) {
            row.parentId = id
            await createRow({row:row, entityID:entityId})
        }else{
            await updateRow({ row: row, entityID: entityId });
        }

        setIsEditingMode(false);
    }, [createRow, editingMode, entityId, updateRow]);


    const handleDeleteRow = useCallback((id: number) => async (event: React.SyntheticEvent) => {
        event.stopPropagation();
        const confirm = window.confirm('Вы действительно хотите удалить строку?');
        if (confirm) {
            await deleteRow({ entityID: entityId, rowId: id });
        }
    }, [deleteRow, entityId]);

    return (

        <div onDoubleClick={handleChangeMode} className={styles.treeNode}>
            <form ref={formRef}>
                <div className={styles.treeNodeRow}>

                    {!isEditingMode && !editingMode && (
                        <div className={styles.fields}>
                            <TreeLevelControl
                                deepLevel={deepLevel}
                                onCreate={handleCreatingMode}
                                onDelete={handleDeleteRow(row.id)}
                            />
                            <div>{row.rowName}</div>
                            <div>{row.salary}</div>
                            <div>{row.equipmentCosts}</div>
                            <div>{row.overheads}</div>
                            <div>{row.estimatedProfit}</div>
                        </div>
                    )}
                    {isEditingMode && (
                        <ClickAwayListener onClickAway={handleUpdateRow(row.id)}>
                            <div className={styles.fields}>
                                <TreeLevelControl
                                    deepLevel={deepLevel}
                                    onCreate={handleCreatingMode}
                                    onDelete={handleDeleteRow(row.id)}
                                />
                                <div><Input name='rowName' fullWidth defaultValue={row.rowName} /></div>
                                <div><Input type='number' name='salary' fullWidth defaultValue={row.salary} /></div>
                                <div><Input type='number' name='equipmentCosts' fullWidth defaultValue={row.equipmentCosts} /></div>
                                <div><Input type='number' name='overheads' fullWidth defaultValue={row.overheads} /></div>
                                <div><Input type='number' name='estimatedProfit' fullWidth defaultValue={row.estimatedProfit} /></div>
                            </div>
                        </ClickAwayListener>
                    )}
                </div>
            </form>

            {row.child && <TreeView deepLevel={deepLevel + 1} rows={row.child} />}

            {isCreatingMode && <TreeView editingMode={true} deepLevel={deepLevel + 1} rows={[{
                id: row.id,
                rowName: 'Новая строка',
                salary: 0,
                equipmentCosts: 0,
                overheads: 0,
                estimatedProfit: 0,
                mimExploitation: 0,
                machineOperatorSalary: 0,
                materials: 0,
                mainCosts: 0,
                supportCosts: 0
            }]} />}
        </div>
    );
});