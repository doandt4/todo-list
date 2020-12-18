import React, { useEffect, useState } from 'react';

function TodoSearch({todos, onSearch}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleOnChangeSearch = (e) =>{
    setSearchTerm(e.target.value);
    onSearch(e.target.value)
  }

  // useEffect(()=> {
  //   const result = todos.filter((todo) => {
  //     todo.toLowerCase().include(searchTerm)
  //     setSearchResult(result)
  //   })
  // }, [searchTerm])

  return (
    <div>
      <input 
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChangeSearch}
      />
    </div>
  );
}

export default TodoSearch;