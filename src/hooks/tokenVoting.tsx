import {
  Context,
  ContextPlugin,
  IProposalQueryParams,
  ProposalSortBy,
  ProposalStatus,
  SortDirection,
  TokenVotingClient,
} from "@aragon/sdk-client";
import { useQuery } from "react-query";
import { useAragonSDKContext } from "../lib/AragonContext";

function useTokenVotingClient() {
  const { context } = useAragonSDKContext();

  const contextPlugin: ContextPlugin = ContextPlugin.fromContext(
    new Context(context)
  );

  return new TokenVotingClient(contextPlugin);
}

export function useFetchMembers(daoAddressOrEns: string) {
  const client = useTokenVotingClient();

  return useQuery({
    queryKey: ["members", daoAddressOrEns],
    queryFn: async () => client.methods.getMembers(daoAddressOrEns),
    enabled: !!client,
    onError(err) {
      console.log({ "❌ useFetchMembers()": err });
    },
  });
}

export function useFetchProposals(queryParams: IProposalQueryParams = {}) {
  const client = useTokenVotingClient();

  return useQuery({
    queryKey: ["proposals", queryParams],
    queryFn: async () =>
      await client.methods.getProposals({
        skip: 0, // optional
        limit: 10, // optional,
        direction: SortDirection.ASC, // optional
        // sortBy: ProposalSortBy.POPULARITY, //optional
        status: ProposalStatus.ACTIVE, // optional
        ...queryParams,
      }),
    enabled: !!client && !!queryParams.daoAddressOrEns,
    onError(err) {
      console.log({ "❌ useFetchProposals()": err });
    },
  });
}

export function useFetchProposal(proposalId: string) {
  const client = useTokenVotingClient();

  return useQuery({
    queryKey: ["proposal", proposalId],
    queryFn: async () => await client.methods.getProposal(proposalId),
    enabled: !!client,
    onError(err) {
      console.log({ "❌ useFetchProposal()": err });
    },
  });
}

export function useFetchVoteSettings(pluginAddress: string) {
  const client = useTokenVotingClient();

  return useQuery({
    queryKey: ["voteSettings", pluginAddress],
    queryFn: async () => await client.methods.getVotingSettings(pluginAddress),
    enabled: !!client,
    onError(err) {
      console.log({ "❌ useFetchVoteSettings()": err });
    },
  });
}
