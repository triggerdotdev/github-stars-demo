import { ApiHeroEndpoint } from "@apihero/core";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function APIHeroProvider({ children }: { children: React.ReactNode }) {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// createEndpoint takes a generic type Endpoint that extends ApiHeroEndpoint, and extracts the generic type Params from it to return a function that takes the params and returns the endpoint.
export function createEndpoint<TProps, TResponseBody, THeaders>(
  endpoint: ApiHeroEndpoint<TProps, TResponseBody, THeaders>
): (props: TProps) => UseQueryResult<TResponseBody, Error> {
  return (props) => {
    const useQueryResult = useQuery<TResponseBody, Error>(
      [endpoint.clientId, endpoint.id, props],
      async (): Promise<TResponseBody> => {
        const res = await fetch(`http://localhost:3000/gateway/run`, {
          method: "POST",
          body: JSON.stringify({
            endpoint,
            params: props,
          }),
          headers: {
            Authorization: `token ${process.env.NEXT_PUBLIC_APIHERO_PROJECT_KEY}`,
          },
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        return res.json();
      },
      {
        refetchOnWindowFocus: false,
        retry: false,
      }
    );

    return useQueryResult;
  };
}
