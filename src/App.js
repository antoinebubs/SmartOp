import './App.css';
//import ListSurgeon from './ListSurgeon';
import SearchAppBar from './SearchAppBar';
import EnhancedTable from './EnhancedTable';
import { useState } from 'react';
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <SearchAppBar setSearchQuery={setSearchQuery} />
    <EnhancedTable searchQuery={searchQuery}/>
    
    
    </>
  );
}

export default App;
