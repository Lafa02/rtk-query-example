import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQueryFetch = fetchBaseQuery({
  baseUrl: "https://pokeapi.co/api/v2/",
  // Here you can add headers, like authorization tokens and more
});

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  const res = await baseQueryFetch(args, api, extraOptions);
  // Here you can add controls on the response to handle errors and more, like using captureException on nextjs
  return res;
};

export default baseQuery;
