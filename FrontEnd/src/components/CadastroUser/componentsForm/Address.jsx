import React from 'react'
import Input from '../../Input'


import {FieldContainerUser} from '../style/styles'
import * as S from '../style/styleAdress'

const  Address= ({register, errors}) => {
  return (

    <FieldContainerUser>
   <div>
     
     <S.CepContainer> 
      <Input label='Cep:' nameInput='address.cep' type='text' register={register} errros={errors}/> 
      <a href="#" target="_blank" rel="noopener noreferrer">Não sei meu cep</a>
      </S.CepContainer>
       <Input label='Cidade:' nameInput='address.cidade' type='text' register={register} errros={errors}/> 
       <Input label='Bairro:' nameInput='address.Bairro' type='text' register={register} errros={errors}/>
       <Input label='Estado:' nameInput='address.Estado' type='text' register={register} errros={errors}/>
   </div>

<div>
  <Input label='Complemento:' nameInput='address.complemento'  register={register} errros={errors}/>
   <S.NumPais>
   <Input label='Numero:' nameInput='address.numeroCasa'  register={register} errros={errors}/>
    <Input label='País:' nameInput='address.pais'  register={register} errros={errors}/>
   </S.NumPais>
  
</div>

 </FieldContainerUser>

  )
}

export default Address