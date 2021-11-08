import Swal from "sweetalert2";

const alertamsg = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    Swal.fire({
        icon: "success",
        title: "Agregado al carrito",
    });
};

export default alertamsg;