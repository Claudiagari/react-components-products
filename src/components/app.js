import React from 'react';
import SearchBar from '../containers/HCsearch-bar';
import ProductTable from '../containers/HCproduct-table';


const App =  ({ products })=> (
  <div className="App">
    <SearchBar />
    <ProductTable products={products}  />
  </div>
)

export default App
