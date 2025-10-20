import { request } from 'utils/helpers/request.helpers';

const loginUrl = `${process.env.REACT_APP_API_URL_DEV}/api/Acceso/loginSage`;
const idAplicativo =process.env.REACT_APP_ID_APLICATION

export function loginApi(Username, Password) {
  return request(`${loginUrl}?Username=${Username}&Password=${Password}&idAplicativo=${idAplicativo}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( Username,  Password ),
  });
}
