import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type TodoData = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export const todoApiService = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    // return TodoData, 需要傳入string搜尋
    getTodoList: builder.query<TodoData, string>({
      query: (id) => `todos/${id}`,
    }),
    // aaa: builder.query({
    //   query: () => 'todos',
    // })
  }),
})

export const { useGetTodoListQuery } = todoApiService