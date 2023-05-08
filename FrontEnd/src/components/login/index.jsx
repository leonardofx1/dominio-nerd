import React from "react";
import {
    Formik,
    Form,
    Field
} from 'formik'

import * as C from './styles'

const Login = () => {
    return (
        <C.Main>
            <C.Container>
                <C.Title>
                    Cadastre-se
                </C.Title>
                <Formik>
                    <Form>
                        <C.FieldContainer>
                            <span>Nome de Usuário:</span>
                            <Field />
                            <span>E-mail:</span>
                            <Field />
                            <span>Senha:</span>
                            <Field />
                            <span>Confirme sua senha:</span>
                            <Field />
                            <span>Celular:</span>
                            <Field />
                            <div>
                                <h3>Dados de entrega</h3>
                                <span>Endereço:</span>
                                <Field />
                                <span>Complemento:</span>
                                <Field />
                                <span>Bairro:</span>
                                <Field />
                                <span>Cidade:</span>
                                <Field />
                                <span>Estado:</span>
                                <Field />
                            </div>
                        </C.FieldContainer>
                        <button>Cadastrar</button>
                    </Form>
                </Formik>
            </C.Container>

            <C.Container>
                <C.Title>
                    Login
                </C.Title>
                <Formik>
                    <Form>
                        <C.FieldContainer>
                            <span>Nome de Usuário:</span>
                            <Field />
                            <span>Senha:</span>
                            <Field />
                        </C.FieldContainer>
                        <button>Entrar</button>
                    </Form>
                </Formik>
            </C.Container>
        </C.Main>
    )
}

export default Login