
import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import ContenidoModal from './contenidoModal';
import './login.css'


export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <>
                <div>
                    <button className="btn-login"onClick={() => this.openModal()}><i className="bi bi-person-circle"></i></button>
                    <Modal
                        visible={this.state.visible}
                        width="740"
                        height="410"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <ContenidoModal />
                    </Modal>
                </div>
            </>
        );
    }
}