import React, {ComponentType} from 'react'
import { useCallback, useLayoutEffect } from "react";
import { entitySlice } from "store/reducers/entity/entity-slice";
import { useDispatch } from "react-redux";
import Cookies  from "js-cookie";
import { entityAPI } from "services/entity-service";

export const EntityHOC = (Component:ComponentType) => React.memo(()=> {
    const [createEntity] = entityAPI.useCreateEntityMutation();

    const dispatch = useDispatch();
    const { entityUpdate } = entitySlice.actions;

    const getEntity = useCallback(async () => {
        const storedEntity = Cookies.get('eID');        
        if (!storedEntity) {
            const {data} = await createEntity();
            Cookies.set('eID',JSON.stringify(data));
            dispatch(entityUpdate(data!.id));
        }
        else{
            dispatch(entityUpdate(JSON.parse(storedEntity).id));
        }
    },[createEntity, dispatch, entityUpdate]);

    useLayoutEffect(() => {
        getEntity();
    }, [getEntity]);

    return (
        <Component/>
    )
})