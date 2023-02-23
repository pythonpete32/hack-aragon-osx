import {
  Client,
  DaoSortBy,
  IDaoQueryParams,
  ITransferQueryParams,
  SortDirection,
  TransferSortBy,
  TransferType,
} from "@aragon/sdk-client";
import { DaoBalancesQueryParams } from "@aragon/sdk-client/dist/interfaces";
import { useQuery } from "react-query";
import { useAragonSDKContext } from ".";

function useClient() {
  const { context } = useAragonSDKContext();
  return new Client(context);
}

export function useFetchDaos(queryParams: IDaoQueryParams = {}) {
  const client = useClient();

  return useQuery({
    queryKey: ["daos", queryParams],
    queryFn: async () =>
      client.methods.getDaos({
        skip: 0,
        limit: 10,
        direction: SortDirection.ASC,
        // sortBy: DaoSortBy.POPULARITY,
        ...queryParams,
      }),
    enabled: !!client,
    onError(err) {
      console.log({ "❌ useFetchDaos()": err });
    },
  });
}

export function useFetchDao(daoAddressOrEns: string) {
  const client = useClient();

  return useQuery({
    queryKey: ["dao", daoAddressOrEns],
    queryFn: async () => client.methods.getDao(daoAddressOrEns),
    enabled: !!client,
    onError(err) {
      console.log({ "❌ useFetchDao()": err });
    },
  });
}

export function useFetchDaoBalances(queryParams: DaoBalancesQueryParams = {}) {
  const client = useClient();

  return useQuery({
    queryKey: ["daoBalance", queryParams],
    queryFn: async () =>
      await client.methods.getDaoBalances({
        daoAddressOrEns: "",
        skip: 0,
        limit: 10,
        direction: SortDirection.ASC,
        ...queryParams,
      }),
    enabled: !!client && !!queryParams.daoAddressOrEns,
    onError(err) {
      console.log({ "❌ useFetchDaoBalances()": err });
    },
  });
}

export function useFetchTransfers(queryParams: ITransferQueryParams = {}) {
  const client = useClient();

  return useQuery({
    queryKey: ["daoTransfers", queryParams],
    queryFn: async () =>
      client.methods.getDaoTransfers({
        daoAddressOrEns: "",
        sortBy: TransferSortBy.CREATED_AT, // optional
        limit: 10, // optional
        skip: 0, // optional
        direction: SortDirection.ASC, // optional
        type: TransferType.DEPOSIT, // optional
        ...queryParams,
      }),
    enabled: !!client && !!queryParams.daoAddressOrEns,
    onError(err) {
      console.log({ "❌ useFetchDaos()": err });
    },
  });
}
