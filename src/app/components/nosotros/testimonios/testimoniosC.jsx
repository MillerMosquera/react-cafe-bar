import React, { useState, useEffect } from "react";
import axios from "axios";

import Testimonios from "./testimonios";

export default function TestimoniosC() {

    const [data, setData] = useState(
        []
    );

    const getData = async () => {
        try {
            const res = await axios.get("https://6181962932c9e2001780489b.mockapi.io/testimonios");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    const testimonios = data.map(testimonio => (
        <div key={testimonio.id}>
            <Testimonios
                descripcion={testimonio.descripcion}
                titulo={testimonio.titulo}
                testimonios={testimonio.testimonios}
            />
        </div>
    ));

    return (
        <div>
            {testimonios}
        </div>
    );

}