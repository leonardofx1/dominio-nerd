import React from 'react'

import * as C from './styles'
import { Field, Form, Formik } from 'formik'

const Dashboard = () => {
    return(
        <C.Main>
            <C.MenuContainer>
                <ul>
                    <li>Cadastrar de Produtos</li>
                    <li>Pedidos Pendentes</li>
                    <li>Estoque</li>
                    <li>Histórico de Vendas</li>
                </ul>
            </C.MenuContainer>
            <C.DashboardField>
                <h1 style={{ textAlign: 'center' }}>Cadastro de produtos</h1>

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
        </C.Main>
    )
}

export default Dashboard