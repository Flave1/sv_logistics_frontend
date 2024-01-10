import swal from 'sweetalert';
import { getAllCountry, createCountry, getSingleCountry, updateCountry, deleteCountry } from '../../services/CountryService';

export const GET_ALL_COUNTRY = '[GET_ALL_COUNTRY] get all country';

export function getAllCountryAction() {
    return (dispatch) => {
      getAllCountry()
        .then((response) => {
          dispatch({
            type: GET_ALL_COUNTRY,
            payload: response.data,
          });
        })
        .catch((error) => {
          const errorMessage = error.response;
          swal('Oops', errorMessage, 'error');
        });
    };
  }

  export function getAllCountryAction2() {
    return getAllCountry()
      .then((response) => {
          return response.data;
      })
      .catch((error) => {
        const errorMessage = error.response;
        swal('Oops', errorMessage, 'error');
      });
  }
  
  export function createCountryAction(payload, setShowForm, resetForm) {
    return (dispatch) => {
        createCountry(payload)
        .then((response) => {
          setShowForm(false);
          resetForm();
          swal('Successful', 'Country successfully created', 'success');
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }
  
  export function getCountryByIdAction(id) {
    return (dispatch) => {
        getSingleCountry(id)
        .then((response) => {
          dispatch({
            type: GET_ALL_COUNTRY,
            payload: response.data,
          });
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }

  export function updateCountryAction(payload, setShowForm, resetForm, setSelectedItem) {
    return (dispatch) => {
        updateCountry(payload)
        .then((response) => {
          setShowForm(false);
          resetForm();
          setSelectedItem(null);
          swal('Successful', 'Country successfully updated', 'success');
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }
  
  export function deleteCountryAction(payload) {
    return (dispatch) => {
      deleteCountry(payload)
        .then((response) => {
          swal('Successful', 'Country successfully deleted', 'success');
          return response.data;
        })
        .catch((error) => {
          const errorMessage = error.response.data.message;
          swal('Oops', errorMessage, 'error');
        });
    };
  }