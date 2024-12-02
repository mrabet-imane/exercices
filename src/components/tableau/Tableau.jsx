import React,{Component} from 'react';

const FormTable = ({ firstName, lastName, adresse, adresse2, city, state, zipCode, num, email, level }) => {
  return (
    <table border={1}>
     
        <tr>
          <th>Input</th>
          <th>Value</th>
        </tr>
    
      <tbody>
        <tr>
          <td>First Name</td>
          <td>{firstName}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{lastName}</td>
        </tr>
        <tr>
          <td>Adresse</td>
          <td>{adresse}</td>
        </tr>
        <tr>
          <td>Adresse 2</td>
          <td>{adresse2}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{city}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{state}</td>
        </tr>
        <tr>
          <td>Zip Code</td>
          <td>{zipCode}</td>
        </tr>
        <tr>
          <td>Num</td>
          <td>{num}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{email}</td>
        </tr>
        <tr>
          <td>Membership Level</td>
          <td>{level}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default FormTable;
