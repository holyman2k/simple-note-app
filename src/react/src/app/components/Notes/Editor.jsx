import React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { cancelEdit, create, update, editItemChanged } from '../../actions/notesAction'
import Modal from '../Modal.jsx'

const UserEditor = ({dispatch, note, allLabels}) => {

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
        const labels = note.labelsString.split(',').map(label => label.trim());
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

    const onLabelChange = (value) => {
        note.labelsString = value;
        dispatch(editItemChanged(note))
    }

    const promptTextCreator = (label) => {
        return label;
    }

    const { id, content, labelsString = ''} = note || {};
    const title = id ? 'Edit Note' : 'Create Note';

    const extraLabels = labelsString.length == 0 ? [] : labelsString.split(',').filter(label => allLabels.filter(option => option.label == label).length == 0);
    const labelOptions = allLabels.concat( extraLabels.map( (label, index) => ({ key: labelOptions.length + 1 + index, value: label, label }) ));

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
                    <Select.Creatable multi simpleValue name='labels' value={labelsString} options={labelOptions} onChange={onLabelChange}
                        promptTextCreator={(label) => `Create label: ${label}`}/>
                </div>
                {labelsString}
            </form>
        </Modal>
    )
}

const UserEditorContainer = connect((store) => {
    return {
        note: store.notes.editItem,
        allLabels: store.notes.labels,
    }
})(UserEditor)

export default UserEditorContainer