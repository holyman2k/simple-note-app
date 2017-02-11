import React from 'react'
import { connect } from 'react-redux'
import { edit } from '../../actions/notesAction.js'
import Row from './Row.jsx'

const List = ({dispatch, list, searchText}) => {

    const onSearch = (text) => {
        dispatch(search(text));
    }

    const rows = list.map(note => <Row key={note.id} note={note} />);

    return (
        <div>
            {rows}
        </div>
    )
}

const ListContainer = connect((store) => {
    const { list, searchText } = store.notes;
    const filteredList = list.filter(item => {
        if (item.content.indexOf(searchText) !== -1) {
            return true;
        }
        return (item.labels || []).filter(label => label.name.indexOf(searchText) !== -1).length > 0
    });
    return {
        list: searchText.length > 0 ? filteredList : list,
    }
})(List);

export default ListContainer;
