import { EntityHOC } from "components/HOCs/entity";
import { ProjectTable } from "../project-table";
import { rowAPI } from "services/row-service";
import { useAppSelector } from "store/hooks";

const CMRModuleBase = () => {
    const {entityId} = useAppSelector(state=>state.entity)
    const {data:rows} = rowAPI.useFetchAllRowsQuery(entityId)
    
    return (
        <ProjectTable rows={rows ? rows : []} />
    );
};

export const CMRModule = EntityHOC(CMRModuleBase)