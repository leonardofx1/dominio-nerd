import React from "react";
import Header from "../components/header";
import CadastroUser from "../components/CadastroUser";
import Footer from "../components/footer";

const LoginPage = () => {
    return (
        <>
            <Header/>
                <CadastroUser />
            <Footer/>
        </>
    )
}

export default LoginPage