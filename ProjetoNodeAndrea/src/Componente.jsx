import { Fragment } from 'react'
import './style.css'

let nome = "Douglas"
let status = true

export default function Componente(){
    return(
        <Fragment>
            <h2>Olá, seja bem vindo(a) {nome}</h2>
            <p>Aqui estamos fazendo um calculo de multiplicação: {43*3}</p>
            <p>O item está {status ? 'Em estoque' : 'Esgotado'}</p>
            <p className='destaque'>Este é um exemplo de parágrafo com estilo personalizado. Aqui você pode colocar qualquer informação ou texto que quiser.</p>
            <ul>
                <li>Etapa Inicial</li>
                <li>Etapa Intermediária</li>
                <li>Etapa Final</li>
            </ul>
        </Fragment>
    )
}