import {useState} from 'react'; 
import Swal from "sweetalert2";

const alertamsg = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    Toast.fire({
        icon: "success",
        title: "Agregado al carrito",
    });
};

export default function Validation (product) {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('datos'));
        if (cart) {
            if (cart.find(item => item.id === product.id)) {
                setError(true);
                setErrorMessage('El producto ya esta en el carrito');
            } else {
                setSuccess(true);
                setSuccessMessage('El producto se agrego al carrito');
                cart.push(product);
                localStorage.setItem('cart', JSON.stringify(cart));
            }
        } else {
            setSuccess(true);
            alertamsg()
            localStorage.setItem('cart', JSON.stringify([product]));
        }
    }

    return {
        error,
        errorMessage,
        success,
        successMessage,
        addToCart
    }
}