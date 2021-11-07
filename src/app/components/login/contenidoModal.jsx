import React, { Fragment, useState } from "react";
import './login.css';
import {
    GlobalStyles,
    Head,
    Text,
    Span,
    Link,
    Input,
    Form,
    Container,
    FormContainer,
    SocialContainer,
    Button,
    OverlayContainer,
    OverlayPanel,
    Overlay
} from "./index.style.js";


function ContenidoModal() {
    const [panelActive, setPanelActive] = useState(false);

    const onSignInEvent = () => {
        setPanelActive(false );
    };

    const onSignUpEvent = () => {
        setPanelActive(true);
    };

    return (
        <Fragment>
            <GlobalStyles />
            <Container
                id="container"
                className={`${panelActive ? "right-panel-active" : ""}`}
            >
                <FormContainer className="sign-up-container">
                    <Form action="#">
                        <Head className="title">Crear una cuenta</Head>
                        <SocialContainer>
                            <Link href="#" className="social">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link href="#" className="social">
                                <i className="bi bi-google"></i>
                            </Link>
                            <Link href="#" className="social">
                                <i className="bi bi-apple"></i>
                            </Link>
                        </SocialContainer>
                        <Span>o use su correo electrónico para registrarse</Span>
                        <Input type="text" placeholder="Nombre" />
                        <Input type="text" placeholder="Correo electrónico" />
                        <Input type="text" placeholder="Contraseña" />
                        <Button>Registrarse</Button>
                    </Form>
                </FormContainer>
                <FormContainer className="sign-in-container">
                    <Form action="#">
                        <Head className="title">Iniciar Sesión</Head>
                        <SocialContainer>
                            <Link href="#" className="social">
                                <i className="bi bi-facebook"></i>
                            </Link>
                            <Link href="#" className="social">
                                <i className="bi bi-google"></i>
                            </Link>
                            <Link href="#" className="social">
                                <i className="bi bi-apple"></i>
                            </Link>
                        </SocialContainer>
                        <Span>o usa tu cuenta</Span>
                        <Input cclassName="input-login"type="text" placeholder="Correo electrónico" />
                        <Input type="text" placeholder="Contraseña" />
                        <Link href="#">¿Olvidaste tu contraseña?</Link>
                        <Button>Iniciar Sesión</Button>
                    </Form>
                </FormContainer>
                <OverlayContainer>
                    <Overlay>
                        <OverlayPanel className="overlay-left">
                            <Head>Bienvenido de nuevo!</Head>
                            <Text>
                                Para mantenerse conectado con nosotros, inicie sesión con su información personal
                            </Text>
                            <Button className="ghost" id="signIn" onClick={onSignInEvent}>
                                Iniciar sesión
                            </Button>
                        </OverlayPanel>
                        <OverlayPanel className="overlay-right">
                            <Head>Hola!</Head>
                            <Text>Ingrese sus datos personales y comience su viaje con nosotros</Text>
                            <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
                                Registrarse
                            </Button>
                        </OverlayPanel>
                    </Overlay>
                </OverlayContainer>
            </Container>
        </Fragment>
    );
}

export default ContenidoModal;