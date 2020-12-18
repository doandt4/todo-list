import React, { useEffect, useState } from 'react';

import './TodoSearch.scss'
function TodoSearch({onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeSearch = (e) =>{
    setSearchTerm(e.target.value);
    onSearch(e.target.value)
  }

  return (
    <div className="TodoSearch">
      <input 
        name="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChangeSearch}
      />
    </div>
  );
}

export default TodoSearch;