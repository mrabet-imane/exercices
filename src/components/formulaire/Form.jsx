import React, { useState } from "react";
import FormTable from '../tableau/Tableau';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [adresse2, setAdresse2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} /> <br />

        <label htmlFor="">Last name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} /> <br />

        <label htmlFor="">Adresse:</label>
        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} /> <br />

        <label htmlFor="">Adresse 2:</label>
        <input type="text" value={adresse2} onChange={(e) => setAdresse2(e.target.value)} /> <br />

        <label htmlFor="">City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} /> <br />

        <label htmlFor="">Zip Code:</label>
        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} /> <br />

        <label htmlFor="">Num:</label>
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} /> <br />

        <label htmlFor="">State:</label>
        <select name="state" id="" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="tanger">Tanger</option>
          <option value="tetouan">Tétouan</option>
          <option value="houssaima">Houssaima</option>
        </select> <br />

        <label htmlFor="">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />

        <label htmlFor="">Choose your membership level:</label><br />
        <input type="radio" name="level" id="" value="Bronze" onChange={(e) => setLevel(e.target.value)} />Bronze
        <input type="radio" name="level" id="" value="Silver" onChange={(e) => setLevel(e.target.value)} />Silver
        <input type="radio" name="level" id="" value="Gold" onChange={(e) => setLevel(e.target.value)} />Gold
        <input type="radio" name="level" id="" value="Platinium" onChange={(e) => setLevel(e.target.value)} />Platinium <br />

        <label htmlFor="">Terms and Conditions:</label>
        <input type="checkbox" name="" id="" checked={isChecked} onChange={(e) => handleChecked(e)} />
        <br /> <input type="submit" value="Envoyer" />
      </form>
      
      {submitted && (
        <FormTable
          firstName={firstName}
          lastName={lastName}
          adresse={adresse}
          adresse2={adresse2}
          city={city}
          state={state}
          zipCode={zipCode}
          num={num}
          email={email}
          level={level}
        />
      )}
    </div>
  );
};

export default Form;
