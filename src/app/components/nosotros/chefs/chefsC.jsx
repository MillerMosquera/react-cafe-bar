import React, { useState, useEffect } from "react";
import axios from "axios";

import Chefs from "./chefs";

export default function ChefsC() {

    const [data, setData] = useState(
        []
    );

    const getData = async () => {
        try {
            const res = await axios.get("https://6181962932c9e2001780489b.mockapi.io/chefs");
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);



    const chefs = data.map(chef => (
        <div key={chef.id}>
            <Chefs
                descripcion={chef.descripcion}
                titulo={chef.titulo}
                chefs={chef.chefs}
            />
        </div>
    ));

    return (
        <div>
            {chefs}
        </div>
    );

}