import React from 'react'
import { connect } from 'react-redux'
import { fetchList, fetchLabels, edit, search } from '../actions/notesAction'
import SearchAndAdd from '../components/SearchAndAdd.jsx'
import List from '../components/Notes/List.jsx'
import Editor from '../components/Notes/Editor.jsx'
import Delete from '../components/Notes/Delete.jsx'

const Notes = ({dispatch, isLoaded, list, searchText}) => {

    if (!isLoaded) {
        dispatch(fetchList());
        dispatch(fetchLabels());
    }

    const onAdd = () => {
        dispatch(edit({}));
    }

    const onSearch = (text) => {
        dispatch(search(text));
    }

    return (
        <div>
            <SearchAndAdd onAdd={onAdd} onSearch={onSearch} />

            <List />

            <Editor />

            <Delete />

        </div>
    )
}

const NotesContainer = connect((store) => {
    return {
        isLoaded: store.notes.isLoaded,
        searchText: store.notes.searchText,
        deleteItem: store.notes.deleteItem,
    }
})(Notes);

export default NotesContainer;
