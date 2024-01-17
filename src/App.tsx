import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import PageNotFound from "./ui/PageNotFound";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
