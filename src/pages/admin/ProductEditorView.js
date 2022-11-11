import React from "react";
import btnAdd from "../../assets/img/btn-add.jpg";

const ProductEditorView = ({
  showEditor,
  somethingChanged,
  formSubmit,
  inputChange,
  product,
  fileChange,
  loadImage,
  handleSave,
  inputFile
}) => {
  return (
    <div className='productUploader'>
      <h1>Editar</h1>

      {/* form */}
      <form action='' onSubmit={formSubmit}>
        <input
          type='text'
          name='category'
          className='category'
          placeholder='categoría'
          onChange={inputChange}
          value={product.category}
        />
        <input
          type='text'
          name='title'
          className='title'
          placeholder='título'
          onChange={inputChange}
          value={product.title}
        />
        <textarea
          type='text'
          name='description'
          className='description'
          placeholder='descripción corta'
          onChange={inputChange}
          value={product.descriptionLarge}
        />
        <textarea
          type='text'
          name='descriptionLarge'
          className='description'
          placeholder='descripción larga'
          onChange={inputChange}
          value={product.description}
        />
        <input
          type='number'
          name='price'
          className='price'
          placeholder='precio'
          onChange={inputChange}
          value={product.price}
        />
        <input
          type='number'
          name='weight'
          className='weight'
          placeholder='onzas'
          onChange={inputChange}
          value={product.weight}
        />

        {/* save and cancel btns */}
        <div className='row-bottom'>
          <div className='image' onClick={loadImage}>
            <input
              type='file'
              name='image'
              onChange={fileChange}
              ref={inputFile}
              accept='.jpg,.jpeg,.png'
            />

            <img
              src={product.image}
              alt='vista previa'
              className='image-preview'
            />

            <img src={btnAdd} alt='añadir' className='image-add' />
          </div>
          {somethingChanged && (
            <button
              className='btn btn-primary'
              type='button'
              onClick={handleSave}
            >
              Guardar
            </button>
          )}
          <button
            className='btn btn-tertiary'
            onClick={() => showEditor(false)}
          >
            Cerrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEditorView;
