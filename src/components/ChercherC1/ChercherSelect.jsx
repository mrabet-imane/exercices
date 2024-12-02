// page ChercherSelect

import React from 'react';

const ChercherS = (props) => {
  const handleSearchS = (e) => {
    props.onSelect(e.target.value);
  };

  return (
    <form>
      <select name="" id="" onChange={handleSearchS}>
       
        <option value="legume">Légumes</option>
        <option value="fruit">Fruits</option>
      </select>
    </form>
  );
};

export default ChercherS;
