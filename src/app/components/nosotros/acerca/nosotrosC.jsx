import React, { useState, useEffect } from "react";
import axios from "axios";

import Nosotros from "./nosotros";

export default function NosotrosC() {
    const [data, setData] = useState(
        []
    );

    const getData = async () => {
        try {
            const res = await axios.get("https://6181962932c9e2001780489b.mockapi.io/acerca");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();

    }, []);



    const nosotros = data.map(info => (
        <div key={info.id}>
            <Nosotros
                descripcion={info.descripcion}
                titulo={info.titulo}
                items={info.items}
            />
        </div>
    ));

    return (
        <div>
            {nosotros}
        </div>
    );

}