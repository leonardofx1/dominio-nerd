import * as z from 'zod';

const validPhone =/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/

const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

export const schema = z.object({
    nameUser: z.string().nonempty({message:'Este campo não pode ser vazio'}).min(1, {message:'Preencha este campo'}),
    email: z.string().email({message:'Informe um E-mail válido'}),
    password: z.string().min(5, {message: 'A senha deve ter no mínimo 5 caracteres'})
    .regex(validPassword, 'A senha deve conter pelo menos uma letra minúscula, uma maiúscula,e um caractere especial'),
    confirmPassword: z.string(),
    tel: z.string().regex(validPhone, 'Numero ínvalido ')
    .transform(tel =>  parseInt(tel))
}).refine( data => data.password === data.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword']
})