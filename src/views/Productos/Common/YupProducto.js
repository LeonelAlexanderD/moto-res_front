import * as Yup from "yup";

export const vsProd = Yup.object({
  codigo: Yup.string()
    .required("Este campo es obligatorio")
    .min(1, "Este campo debe tener al menos 7 dígitos")
    .max(99999999, "Este campo debe tener como máximo 8 dígitos"),

  nombre: Yup.string()
    .required("Este campo es obligatorio")
    .min(4, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),
  //.matches(/^[a-zA-Z]+$/, "El apellido solo debe contener letras"),
  precio_unitario: Yup.string()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),
  modelo: Yup.string()
    .email()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),

  
});

export const vsFiltroProd = Yup.object({
  nombre: Yup.string()
    .min(1, "Este campo debe tener al menos 7 dígitos")
    .max(99999999, "Este campo debe tener como máximo 8 dígitos"),
});
