import { useEffect, useState } from "react";
import { useAragonSDKContext } from "../lib/AragonContext";
import { DaoSortBy, IDaoQueryParams, SortDirection } from "@aragon/sdk-client";

export default function useGetDaos(queryParams = {}) {
  const { client } = useAragonSDKContext();
  const [daos, setDaos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchDaos(params: IDaoQueryParams) {
    setLoading(true);
    try {
      const queryParams: IDaoQueryParams = {
        skip: 0, // optional
        limit: 10, // optional,
        direction: SortDirection.ASC, // optional
        sortBy: DaoSortBy.POPULARITY, //optional
        ...params,
      };
      const daos = await client.methods.getDaos(queryParams);
      setDaos(daos);
      setLoading(false);
    } catch (error: any) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (client?.methods) {
      fetchDaos(queryParams);
    }
  }, [client, queryParams]);

  return { daos, loading, error };
}
