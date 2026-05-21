"use client";

import { queryClient } from "@/utils/client/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

interface Props {
	children: React.ReactNode;
}

const QueryProvider: React.FC<Props> = (props) => {
	const { children } = props;

	const client = queryClient.client;

	return (
		<QueryClientProvider client={client}>{children}</QueryClientProvider>
	);
};

export default QueryProvider;
