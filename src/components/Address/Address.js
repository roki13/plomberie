import React from 'react';


class Address extends React.Component {
    render() {
      return (
  
       
        <div vocab="http://schema.org/" typeof="Plumber">
        <span property="name">Bicaïs Plomberie</span>       
       
        <div property="address" typeof="PostalAddress">
          <span property="streetAddress">5 Allée des Asphodèles</span><br/>
          <span property="postalCode">04370</span> <span property="addressLocality">Beauvezer</span>,
        </div>
        <div property="validIn" typeof="AdministrativeArea">
          <span property="name">Haut-Verdon</span>
        </div>

        Téléphone: <a href="tel:+330686220118" property="telephone">06 86 22 01 18</a>
        
     
      </div>


      );
    }
  }

  export default Address;