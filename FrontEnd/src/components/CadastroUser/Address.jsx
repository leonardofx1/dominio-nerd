import React from 'react'
import * as C from './style/styles'

const  Address= ({Input, register, errors}) => {
  return (

    <C.FieldContainerUser>
   <div>
     
     
      <Input label='Cep:' nameInput='cep' type='number' register={register} errros={errors}/>
      
       <Input label='Cidade:' nameInput='cidade:'  register={register} errros={errors}/>
       <Input label='Bairro:' nameInput='Bairro:'  register={register} errros={errors}/>
       <Input label='Estado:' nameInput='Estado:'  register={register} errros={errors}/>
   </div>

<div>
  <Input label='Complemento:' nameInput='Complemento'  register={register} errros={errors}/>
    <Input label='Numero:' nameInput='numeroCasa'  register={register} errros={errors}/>
    <Input label='País:' nameInput='pais'  register={register} errros={errors}/>
  
</div>

 </C.FieldContainerUser>

  )
}

export default Address