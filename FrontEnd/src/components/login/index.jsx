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
                            <C.Entrega>
                            <label>Nome de Usuário:</label>
                            <Field />
                            <label>E-mail:</label>
                            <Field />
                            <label>Senha:</label>
                            <Field />
                            <label>Confirme sua senha:</label>
                            <Field />
                            <label>Celular:</label>
                            <Field />,
                            </C.Entrega>
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
                            <label>Nome de Usuário:
                            <Field /></label>
                            <label>Senha:
                            <Field /></label>
                        </C.FieldContainer>
                        <button>Entrar</button>
                    </Form>
                </Formik>
            </C.Container>
        </C.Main>
    )
}

export default Login