import React from "react";

function Menu() {
  return (
    <ul className='menu'>
      <li>
        <a href='#' className='selected'>
          inicio
        </a>
      </li>
      <li>
        <a href='#'>tienda</a>
      </li>
      <li>
        <a href='#'>nosotros</a>
      </li>
      <li>
        <a href='#'>contacto</a>
      </li>
    </ul>
  );
}

export default Menu;
