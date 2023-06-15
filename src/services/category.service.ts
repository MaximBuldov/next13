import { AxiosResponse } from "axios";
import { $api } from "./http";
import { ICat } from "@/models";

export async function getAllCategories() {
  const res = await $api.get('categories');
  return res.data as ICat[];
}

// export const categoryApi = createApi({
//   reducerPath: 'categoryAPi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:3000/api/'
//   }),
//   endpoints: (build) => ({
//     fetchAllCategories: build.query<ICat[], unknown>({
//       query: () => ({
//         url: 'categories'
//       })
//     })
//   })
// })