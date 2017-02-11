import React from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { cancelEdit, _delete } from '../../actions/notesAction'
import Modal from '../Modal.jsx'

const Delete = ({dispatch, note}) => {

    const onCancel = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        dispatch(cancelEdit());
    }

    const onDelete = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        dispatch(_delete(note));
    }

    const _note = note || Map({});
    return (
        <Modal show={note != null} title='Delete' showButtons={false}
            onCancel={e => onCancel(e)}>
            <p>Delete Note>?</p>
            <div class='text-right'>
                <button class='btn btn-default' onClick={e => onCancel(e)}>CANCEL</button>
                <button class='btn btn-danger' onClick={e => onDelete(e)}>DELETE</button>
            </div>
        </Modal>
    )
}

const DeleteContainer = connect((store) => {
    return {
        note: store.notes.deleteItem,
    }
})(Delete)

export default DeleteContainer