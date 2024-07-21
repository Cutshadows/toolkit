import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// the importation is broken when the file is imported from @reduxjs/toolkit/query


export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        })
    }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;