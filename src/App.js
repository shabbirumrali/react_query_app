import { useState } from "react";
import { Navbar, People, Planets } from "./components";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const App = () => {
  const queryClient = new QueryClient();
  const [page, setPage] = useState('planets')
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <h1>Star wars</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People /> }
          </div>
        </div>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
