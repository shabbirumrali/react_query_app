import { useState } from "react";
import { Navbar, People, Planets } from "./components";

const App = () => {
  const [page, setPage] = useState('planets')
  return (
    <div className='App'>
      <h1>Star wars</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === 'planets' ? <Planets /> : <People /> }
      </div>
    </div>
  );
}

export default App;
