import React from "react";

function UploadImage() {
  return (
    <div className='uploadimage'>
      <form action=''>
        <input type='file' name='image' id='' />
        <input type='button' value='Aceptar' />
      </form>
    </div>
  );
}

export default UploadImage;
