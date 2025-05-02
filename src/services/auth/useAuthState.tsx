import {useQueryClient, useQuery} from "@tanstack/react-query";

export const useAuthState = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["token"],
    queryFn: () => Promise.resolve({ token: null }),
    initialData: { token: null },
  });

  const setData = (newToken: string) => {
    queryClient.setQueryData(["token"], newToken);
  };

  const resetData = () => {
    queryClient.setQueryData(['token'], { token: null });
  };

  return { data, setData, resetData };
}
