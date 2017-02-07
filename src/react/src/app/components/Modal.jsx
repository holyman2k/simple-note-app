import React from 'react';
import ReactDOM from 'react-dom'

class Modal extends React.Component {

    componentDidMount() {
        let modal = ReactDOM.findDOMNode(this);
        let props = this.props;
        $(modal).on('hidden.bs.modal', function () {
            props.onCancel();
        });
    }

    componentWillUnmount() {
        let modal = ReactDOM.findDOMNode(this);
        if (modal) {
            $(modal).off('hidden.bs.modal');
        }
    }

    componentWillReceiveProps(props) {
        const {show} = props;
        let modal = ReactDOM.findDOMNode(this);
        if (show) {
            let options = {
                backdrop: 'static',
                keyboard: false
            };
            $(modal).modal(options);
        } else {
            $(modal).modal('hide');
        }
    }

    cancel() {
        let modal = ReactDOM.findDOMNode(this);
        $(modal).modal('hide');
        this.props.onCancel();
    }

    render() {
        const {show, children, title, onAction, actionButtonTitle = 'OK', actionButtonClass = 'btn-primary', showButtons = true} = this.props;
        return (
            <div class='modal fade' data-backdrop='static' tabIndex='-1' role='dialog'>
                {!show ||
                    <div class='modal-dialog' role='document'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <button type='button' class='close' onClick={this.cancel.bind(this)} aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                                <h4 class='modal-title'>{title}</h4>
                            </div>
                            <div class='modal-body'>
                                {children}
                            </div>
                            {!showButtons ||
                                <div class='modal-footer'>
                                    <button type='button' class='btn btn-default' onClick={this.cancel.bind(this)}>CANCEL</button>
                                    <button type='button' class={'btn ' + actionButtonClass} onClick={onAction}>
                                        {actionButtonTitle}
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

Modal.propTypes = {
    show: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.any.isRequired,
    onAction: React.PropTypes.func,
    actionButtonTitle: React.PropTypes.string,
    actionButtonClass: React.PropTypes.string,
    showButtons: React.PropTypes.bool,
}

export default Modal;
