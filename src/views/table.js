import { useState, useEffect } from "react";
import ImcCalculator from "../domain/services";

export default function ImcTable() {
    const [ list, setList ] = useState([]);


    function table() {    
        const svc = new ImcCalculator();

        //1 - userEffect utilização
        useEffect(() =>{
            console.log("Roda a cada renderização")

        })

        const res = svc.getTable((item) => {            
            setList(item);
        })

        return res;
    }


    table();

    return (
    <table>
        { Object.values(list).map((imc, index) => <tr key={index}><td>
            
            {
            Object.keys(list)[index]
            }
            </td><td>{imc}</td></tr>)
        }
    </table>
    );
}