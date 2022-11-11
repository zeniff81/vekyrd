import React, { useEffect, useState } from "react";

const CatalogItemBack = ({ productInfo, ...props }) => {
  const [title, setTitle] = useState(" pronto");
  const [content, setContent] = useState(
    "No hay secretos en esta tarjeta. Vuelve luego."
  );

  useEffect(() => {
    if (productInfo.secret != null) {
      setTitle(productInfo.secret.title);
      setContent(productInfo.secret.content);
    }
  }, [productInfo]);

  return (
    <div className={`catalogitemback ${props.className}`}>
      <div className='caption'>secretos</div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default CatalogItemBack;
