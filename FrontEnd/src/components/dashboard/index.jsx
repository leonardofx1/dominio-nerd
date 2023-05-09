import React from 'react'

import * as C from './styles'
import { Field, Form, Formik } from 'formik'

const Dashboard = () => {
    return(
        <C.Main>
            <C.MenuContainer>
                <C.List>
                    <C.ItemList>Cadastrar de Produtos</C.ItemList>
                    <C.ItemList>Pedidos Pendentes</C.ItemList>
                    <C.ItemList>Estoque</C.ItemList>
                    <C.ItemList>Histórico de Vendas</C.ItemList>
                </C.List>
            </C.MenuContainer>

            <C.DashboardField>
                <C.Title>Cadastro de produtos</C.Title>

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
        </C.Main>
    )
}

export default Dashboard