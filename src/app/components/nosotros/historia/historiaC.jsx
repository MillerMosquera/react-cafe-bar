import React, { useState, useEffect } from "react";
import axios from "axios";

import Historia from "./historia";

export default function HistoriaC() {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("https://6181962932c9e2001780489b.mockapi.io/historia");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const historia = data.map((info, i) => (
        <div key="{i}">
            <Historia
                descripcion={info.descripcion}
                titulo={info.titulo}
                contenido={info.contenido}
                imagen={info.imagen}
                background={info.background}
            />
        </div>
    ));
    
    return (
        <div>
            {historia}
        </div>
    );

}