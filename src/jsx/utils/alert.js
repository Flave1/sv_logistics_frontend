import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

class FoodieAlert {
  static showSuccess(message) {
    toast.success(`${message}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  static showError(text) {
    toast.error(`${text}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  static async confirmAction(actionMsg) {
    return Swal.fire({
      title: 'Are you sure?',
      text: actionMsg,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      return result.isConfirmed;
    });
  }
  static confirmed() {
    Swal.fire('Deleted!', 'Item has been deleted.', 'success');
  }
}
export default FoodieAlert;
