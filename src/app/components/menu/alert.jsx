import Swal from "sweetalert2";

const alertamsg = () => {

    Swal.fire({
        icon: "success",
        title: "Agregado al carrito",
    });
};

export default alertamsg;