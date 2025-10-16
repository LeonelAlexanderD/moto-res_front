import React, { createContext, useState } from "react";

export const ProductoProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [producto, setProducto] = useState({});

  return (
    <ProductoContext.Provider value={{ page, producto, setPage, setProducto }}>
      {children}
    </ProductoContext.Provider>
  );
};

export const ProductoContext = createContext();
