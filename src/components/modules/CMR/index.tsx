import { EntityHOC } from "components/HOCs/entity";
import { ProjectTable } from "../project-table";
import { rowAPI } from "services/row-service";
import { useAppSelector } from "store/hooks";
import { IRow } from "models/row";
import { useCallback, useLayoutEffect } from "react";

const emptyRow:IRow = {
    id: -1,
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
}

const CMRModuleBase = () => {
    const {entityId} = useAppSelector(state=>state.entity)
    const {data:rows} = rowAPI.useFetchAllRowsQuery(entityId)

    const [createEntity] = rowAPI.useCreateRowMutation()

    

    const createFirstRow = useCallback(async () => await createEntity({row:emptyRow, entityID:entityId}),[createEntity, entityId]);

    useLayoutEffect(()=>{
        if(rows === undefined) return;
        if(rows.length === 0){
            createFirstRow();
        }
    },[createFirstRow, rows])
    
    return (
        <ProjectTable rows={rows ? rows : []} />
    );
};

export const CMRModule = EntityHOC(CMRModuleBase)