// page chercherB

import React, { useState } from 'react';

const ChercherElt = (props) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    props.onSearch(search);
  };

  return (
    <form>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher..."
      />
      <input
        type="button"
        value="Rechercher"
        onClick={handleSearch}
      />
    </form>
  );
};

export default ChercherElt;
