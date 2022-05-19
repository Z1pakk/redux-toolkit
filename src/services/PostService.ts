import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
      fetchAllUsers: build.query({
          query: () => ({
              url: '/users'
          })
      })
    })
})
