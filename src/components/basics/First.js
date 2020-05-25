import React from 'react'
// O react é necessário para rodar o JSX 'tags dentro do javascript abaixo'
export default function First(){
    const msg = 'Seja bem vindo(a)!'
    return (
        <div>
            <h2>First Component</h2>
            <p>{ msg }</p>
        </div>
    )
}