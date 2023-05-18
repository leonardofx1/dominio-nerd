import React from 'react'

const  Address= () => {
  return (
    <C.Entrega>
    <h3>Dados de entrega</h3>
    <label>Endereço:</label>
    <Field />
    <label>Complemento:</label>
    <Field />
    <label>Bairro:</label>
    <Field />
    <label>Cidade:</label>
    <Field />
    <label>Estado:</label>
    <Field />
</C.Entrega>
  )
}

export default Address