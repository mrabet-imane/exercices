/*page resultat*/ 
import React from 'react';

const Resultat = (props) => {
  return (
    <div>
      <ul>
        {props.res.map((val, cle) => (
          <li key={cle}>{val.nom} [{val.type}]</li>
        ))}
      </ul>
    </div>
  );
};

export default Resultat;
