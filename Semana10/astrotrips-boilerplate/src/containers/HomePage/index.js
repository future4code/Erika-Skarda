import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push } from "connected-react-router";
import { Container, ContainerHeader, Logo, HeaderFl, Img, Imagem, ContainerCarrossel} from '../HomePage/styled';
import Button from '@material-ui/core/Button';

class HomePage extends Component {

    state = {

    }

    render() {

        const{goToLogin, goToForm, goToHome} = this.props
        return (
            <Fragment>
                <Container>
                    <ContainerHeader >
                        <Logo><Img src={require("../../img/logo.png")} /></Logo>
                        <HeaderFl>
                            <Button onClick={goToHome}>Home</Button>
                            <Button onClick={goToLogin}>Login</Button>
                            <Button onClick={goToForm}>Formulário</Button>
                        </HeaderFl>
                    </ContainerHeader >
                </Container>
                <ContainerCarrossel>
                    <figure className="slider-principal">
                        <Imagem src={require("../../img/marte.jpg")} />
                        <Imagem src={require("../../img/jupiter.jpg")} />
                        <Imagem src={require("../../img/netuno.png")} />
                        <Imagem src={require("../../img/plutao.jpg")} />
                        <Imagem src={require("../../img/plutao.jpg")} />
                    </figure>
                </ContainerCarrossel>

            </Fragment>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        goToForm: () => dispatch(push(routes.form)),
        goToHome: () => dispatch(push(routes.home))
        
    }
}
export default connect(null,mapDispatchToProps)(HomePage)
