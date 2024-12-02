/* page chercher */

import React, { useState } from 'react';
import ChercherElt from './ChercherB';
import ChercherS from './ChercherSelect';
import Resultat from './Resultat';

const Tab=[ {nom:"banane",type:"fruit"}, {nom:"orange",type:"fruit"}, {nom:"pomme",type:"fruit"}, {nom:"raisins",type:"fruit"}, {nom:"kiwi",type:"fruit"}, {nom:"tomate",type:"legume"}, {nom:"carotte",type:"legume"}, {nom:"pomme de terre",type:"legume"}, {nom:"navet",type:"legume"}, {nom:"poivron",type:"legume"} ]

const SearchPage = () => {
  const [TabFiltrer, setTabFiltrer] = useState(Tab);
// j'ai pas compris pourquoi il a utilise query
  const handleSearch = (query) => {
    setTabFiltrer(
      Tab.filter(elt => elt.nom.includes(query.toLowerCase()))
    );
  };

  const handleSelect = (type) => {
    setTabFiltrer(
      type ? Tab.filter(elt => elt.type == type) : Tab
    );
  };

  return (
    <div>
      <ChercherElt onSearch={handleSearch} />
      <ChercherS onSelect={handleSelect} />
      <Resultat res={TabFiltrer} />
    </div>
  );
};

export default SearchPage;
