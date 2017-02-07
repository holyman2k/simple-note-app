import React from 'react'
import { connect } from 'react-redux'
import { fetchList, edit, search } from '../actions/notesAction'
import SearchAndAdd from '../components/SearchAndAdd.jsx'
import List from '../components/Users/List.jsx'
import Editor from '../components/Users/Editor.jsx'
import Delete from '../components/Users/Delete.jsx'

const Notes = ({dispatch, isLoaded, list, searchText}) => {

    if (!isLoaded) {
        dispatch(fetchList());
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
