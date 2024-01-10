import { getAllClients } from '../../services/ClientService';
import swal from 'sweetalert';

export const GET_ALL_CLIENT = '[GET_ALL_CLIENT] get all client';
///Menu Actions
export function getAllClientsAction() {
  return getAllClients()
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
      const errorMessage = error.response;
      swal('Oops', errorMessage, 'error');
    });
}
