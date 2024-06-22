import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IEntity } from "models/entity";

export const entityAPI = createApi({
    reducerPath: 'entityAPI',
    baseQuery: fetchBaseQuery({baseUrl:'http://185.244.172.108:8081/v1/outlay-rows/entity'}),
    endpoints:(build)=>({
        createEntity: build.mutation<IEntity, void>({
            query: () => ({
                url:'/create',
                method:'POST'
            })
        })
    })
})