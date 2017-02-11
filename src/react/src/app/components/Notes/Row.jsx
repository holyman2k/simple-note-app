import React from 'react'
import merge from 'merge'
import { connect } from 'react-redux'
import { edit, prepareToDelete } from '../../actions/notesAction.js'

const Row = ({dispatch, note}) => {

    const onEdit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const labelsString = note.labels.map(label => label.name).join(', ');
        let editItem = merge(true, note, { labelsString });
        dispatch(edit(editItem));
    }

    const onDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(prepareToDelete(note));
    }

    const { content, labels = [] } = note;
    const contentHtml = content.split('\n').map((text, index) => <p key={index}>{text}</p>);
    const labelList = (labels || []).map(label => <li key={label.id}>{label.name}</li>);

    return (
        <div class='panel panel-default'>
            <div class='panel-body'>
                <div>{contentHtml}</div>
                <ul class='list-inline labels'>
                    {labelList}
                </ul>
                <ul class='list-inline'>
                    <li><a href='#' onClick={e => onEdit(e)}>Edit</a></li>
                    <li><a href='#' class='text-danger' onClick={e => onDelete(e)}>Delete</a></li>
                </ul>
            </div>
        </div>
    )
}

const RowContainer = connect()(Row);

export default RowContainer;
