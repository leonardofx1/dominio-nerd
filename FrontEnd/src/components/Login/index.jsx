import React from 'react'

const  Login = () =>  {
  return (
    
    <C.Container>
    <C.Title>
        Login
    </C.Title>
    <div>
        <form>
            <C.FieldContainer>
                <label>Nome de Usuário:
                </label>
                <label>Senha:
                </label>
            </C.FieldContainer>
            <button>Entrar</button>
        </form>
    </div>
</C.Container>
  )
}

export default Login