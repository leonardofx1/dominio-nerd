import React from 'react';
import Input from '../Input'


const PeopleFisica = ({register, errors}) =>  {
  return (
    <>
        <div>
            <Input nameInput='fullName' type='text'  label='Nome completo:' register={register}/>
                {errors.fullName?.message && <p> {errors.fullName.message}</p>}
    
             <Input nameInput='tel' type='tel' label='Celular:'  register={register}/>
             {errors.tel?.message && <p>{errors.tel.message}</p>}
             <div>
             <Input nameInput='aniversario' type='date' label='Data de aniversário'  register={register}/>
             {errors.aniversario?.message && <p>{errors.aniversario.message}</p>}
             
         </div>
         </div>
         <div>
         <div>
             <Input nameInput='tel' type='tel' label='Celular'  register={register}/>
             {errors.tel?.message && <p>{errors.tel.message}</p>}
         </div>
             <Input nameInput='phone' type='tel' label='Telefone fixo:'  register={register}/>
             {errors.phone?.message && <p>{errors.phone.message}</p>}
         </div>
         <label>
                                    <input
                                        type="radio"
                                        id="pessoaJuridica"
                                        name="pessoaType"
                                        value="pessoaJuridica"
                                        {...register('pessoaType')}
                                    />
                                    Pessoa Jurídica
                                    </label>
                                    <label>
                                    <input
                                        type="radio"
                                        id="pessoaJuridica"
                                        name="pessoaType"
                                        value="pessoaJuridica"
                                        {...register('pessoaType')}
                                    />
                                    Pessoa Jurídica
                                    </label>
    </>
    
  )
}

export default PeopleFisica