import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRow } from "models/row";


export const rowAPI = createApi({
    reducerPath: 'rowAPI',
    baseQuery: fetchBaseQuery({baseUrl:`http://185.244.172.108:8081/v1/outlay-rows/entity`}),
    tagTypes:['Rows'],
    endpoints:(build)=>({
        fetchAllRows: build.query<IRow[], number>({
            query: (entityID:number) => ({
                url:`/${entityID}/row/list`
            }),
            providesTags: ['Rows']
        }),
        createRow: build.mutation<IRow, {row:IRow, entityID:number}>({
            query: ({row, entityID}) => ({
                url:`/${entityID}/row/create`,
                method: 'POST',
                body:row
            }),
            invalidatesTags:result => [{type:'Rows', id:result?.id}]
        }),
        updateRow: build.mutation<IRow, {row:IRow, entityID:number}>({
            query: ({row, entityID}) => ({
                url:`/${entityID}/row/${row.id}/update`,
                method: 'POST',
                body:row
            }),
            invalidatesTags:result => [{type:'Rows', id:result?.id}]
        }),
        deleteRow: build.mutation<IRow, {rowId:number, entityID:number}>({
            query: ({rowId, entityID}) => ({
                url:`/${entityID}/row/${rowId}/delete`,
                method: 'DELETE',
            }),
            invalidatesTags:result => [{type:'Rows', id:result?.id}]
        })
    })
})