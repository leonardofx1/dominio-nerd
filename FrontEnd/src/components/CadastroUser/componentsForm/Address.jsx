import React from 'react'
import {FieldContainerUser} from '../style/styles'
import * as S from '../style/styleAdress'

const  Address= ({Input, register, errors}) => {
  return (

    <FieldContainerUser>
   <div>
     
     <S.CepContainer> 
      <Input label='Cep:' nameInput='cep' type='number' register={register} errros={errors}/> 
      <a href="#" target="_blank" rel="noopener noreferrer">Não sei meu cep</a>
      </S.CepContainer>
     
      
       <Input label='Cidade:' nameInput='cidade:'  register={register} errros={errors}/>
       <Input label='Bairro:' nameInput='Bairro:'  register={register} errros={errors}/>
       <Input label='Estado:' nameInput='Estado:'  register={register} errros={errors}/>
   </div>

<div>
  <Input label='Complemento:' nameInput='Complemento'  register={register} errros={errors}/>
   <S.NumPais>
   <Input label='Numero:' nameInput='numeroCasa'  register={register} errros={errors}/>
    <Input label='País:' nameInput='pais'  register={register} errros={errors}/>
   </S.NumPais>
  
</div>

 </FieldContainerUser>

  )
}

export default Address