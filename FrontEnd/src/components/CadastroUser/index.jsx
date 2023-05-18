import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'
import {
    Formik,
    Form,
    Field
} from 'formik'

import * as C from './styles'

const CadastroUser = () => {
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
                           
                        </C.FieldContainer>
                        <C.Btn> Avançar <AiOutlineArrowRight/></C.Btn>
                    </Form>
                </Formik>
            </C.Container>

        </C.Main>
    )
}

export default CadastroUser