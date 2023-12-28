import Swal from 'sweetalert2'

class FoodieAlert {
    static showSuccess(message) {
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: message,
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    static showError(text, title) {
        Swal.fire({
            title,
            text,
            icon: 'error',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    static async confirmAction(actionMsg){
        return Swal.fire({
            title: 'Are you sure?',
            text: actionMsg,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            return result.isConfirmed;
        })
    }
    static confirmed() {
        Swal.fire(
            'Deleted!',
            'Item has been deleted.',
            'success'
        )
    }
}
export default FoodieAlert;