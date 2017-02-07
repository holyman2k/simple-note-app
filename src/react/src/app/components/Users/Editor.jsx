import React from 'react'
import { connect } from 'react-redux'
import { cancelEdit, create, update, editItemChanged } from '../../actions/notesAction'
import Modal from '../Modal.jsx'

const UserEditor = ({dispatch, note}) => {

    const onCancel = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        dispatch(cancelEdit());
    }

    const onSave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const labels = note.labelsString.split(', ')
        note.labels = labels;
        if (note.id) {
            dispatch(update(note));
        } else {
            dispatch(create(note));
        }
    }

    const onTextChange = (value, field) => {
        note[field] = value;
        dispatch(editItemChanged(note))
    }

    const { id, content, labelsString, labels = [] } = note || {};
    const title = id ? 'Edit Note' : 'Create Note';
    return (
        <Modal show={note != null} title={title} actionButtonTitle='SAVE'
            onCancel={onCancel} onAction={onSave} >
            <form>
                <div class='form-group'>
                    <label for='content'>Name</label>
                    <textarea class='form-control' id='content' rows='6'
                        value={content || ''} onChange={(e) => onTextChange(e.target.value, 'content')} />
                </div>
                <div class='form-group'>
                    <input type='text' class='form-control' id='labels' placeholder='Labels'
                        value={labelsString || ''} onChange={(e) => onTextChange(e.target.value, 'labelsString')} />
                </div>
            </form>
        </Modal>
    )
}

const UserEditorContainer = connect((store) => {
    return {
        note: store.notes.editItem,
    }
})(UserEditor)

export default UserEditorContainer