import { QueryClient } from "@tanstack/react-query";

export const queryClient = {
	client: new QueryClient(),
};

Object.freeze(queryClient);
