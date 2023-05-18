import React from 'react'

const  Login = () =>  {
  return (
    
    <C.Container>
    <C.Title>
        Login
    </C.Title>
    <Formik>
        <Form>
            <C.FieldContainer>
                <label>Nome de Usuário:
                <Field /></label>
                <label>Senha:
                <Field /></label>
            </C.FieldContainer>
            <button>Entrar</button>
        </Form>
    </Formik>
</C.Container>
  )
}

export default Login