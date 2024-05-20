import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Product"],
    }),
    deleteProducts: build.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    postProducts: build.mutation({
      query: (body) => ({
        url: "/products",
        body,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    putProducts: build.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDeleteProductsMutation,
  usePostProductsMutation,
  usePutProductsMutation,
} = productApi;
