import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IItem } from "../../types/item";

export const productApi = createApi({
  reducerPath: "productApi",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getItem: builder.query<IItem[], string>({
      query: () => `cases`,
      providesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    createItem: builder.mutation({
      query: (recipe) => ({
        body: recipe,
        url: "cases",
        method: "POST",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
    deleteItem: builder.mutation<IItem, IItem>({
      query: (id) => ({
        url: `cases/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: () => [
        {
          type: "Recipe",
        },
      ],
    }),
  }),
});

export const { useGetItemQuery, useCreateItemMutation, useDeleteItemMutation } =
  productApi;
