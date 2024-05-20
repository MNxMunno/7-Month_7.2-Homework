import { api } from "./api";

export const usersApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["Users"],
    }),
    getUsersDetail: build.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    postUsers: build.mutation({
      query: (body) => ({
        url: "/users",
        body,
        method: "POST",
      }),
      invalidatesTags: ["Users"],
    }),
    putUsers: build.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUsersDetailQuery,
  useDeleteUsersMutation,
  usePostUsersMutation,
  usePutUsersMutation,
} = usersApi;
