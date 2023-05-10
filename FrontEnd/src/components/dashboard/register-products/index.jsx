import React from 'react'

import { Field, Form, Formik } from 'formik'

import * as C from './styles'

const RegisterProducts = () => {
    return(
        <C.DashboardField>
            <C.Title>
                Cadastro de Produtos
            </C.Title>

            <C.Container>
                <h2>
                    Insira as informações baixo para cadastrar um novo produto:
                </h2>
                <Formik>
                    <Form>
                        <C.FieldContainer>
                            <span>Nome do Produto:</span>
                            <Field />
                            <span>Edição:</span>
                            <Field />
                            <span>Url de imagem do produto:</span>
                            <Field />
                            <span>Estoque:</span>
                        <Field />
                            <span>Valor:</span>
                            <Field />
                        </C.FieldContainer>
                        <button>Cadastrar</button>
                    </Form>
                </Formik>
            </C.Container>
    </C.DashboardField>
    )
}

export default RegisterProducts