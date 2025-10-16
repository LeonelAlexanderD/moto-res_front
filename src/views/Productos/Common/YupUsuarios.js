import * as Yup from "yup";

export const vsUsuario = Yup.object({
  documento: Yup.number()
    .required("Este campo es obligatorio")
    .integer("Este campo debe ser un número entero")
    .positive("Este campo debe ser un número positivo")
    .min(1000000, "Este campo debe tener al menos 7 dígitos")
    .max(99999999, "Este campo debe tener como máximo 8 dígitos"),

  nombre: Yup.string()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),
  //.matches(/^[a-zA-Z]+$/, "El apellido solo debe contener letras"),
  usuario: Yup.string()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),
  email: Yup.string()
    .email()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),

  contraseña: Yup.string()
    .required("Este campo es obligatorio")
    .min(10, "Este campo debe tener al menos 2 caracteres")
    .max(50, "Este campo debe tener como máximo 50 caracteres"),

  reparticion: Yup.string().required("Este campo es obligatorio"),
});

export const vsFiltroUsuario = Yup.object({
  documento: Yup.number()
    .integer("Este campo debe ser un número entero")
    .positive("Este campo debe ser un número positivo")
    .min(1000000, "Este campo debe tener al menos 7 dígitos")
    .max(99999999, "Este campo debe tener como máximo 8 dígitos"),
});
