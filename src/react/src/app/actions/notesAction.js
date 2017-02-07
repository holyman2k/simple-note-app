import axios  from 'axios'
import rest from './rest'

const baseUrl = rest.baseUrl;

export function fetchList() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_NOTES' });
        axios.get(`${baseUrl}/notes`)
            .then((response) => {
                dispatch({ type: "FETCH_NOTES_FULFILLED", payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: "FETCH_NOTES_REJECTED", payload: error })
            });
    }
}

export function fetchAccount() {
    return function (dispatch) {
        dispatch({ type: 'FETCH_ACCOUNT' });
        axios.get(`${baseUrl}/notes/account`)
            .then((response) => {
                dispatch({ type: "FETCH_ACCOUNT_FULFILLED", payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: "FETCH_ACCOUNT_REJECTED", payload: error })
            });
    }
}

export function cancelEdit() {
    return {
        type: 'CANCEL_EDIT_NOTE',
    }
}

export function editItemChanged(user) {
    return {
        type: 'EDIT_NOTE_CHANGED',
        payload: user
    }
}

export function edit(note) {
    return {
        type: 'PREPARE_TO_EDIT_NOTE',
        payload: note
    }
}

export function create(note) {
    return function (dispatch) {
        dispatch({ type: 'CREATE_NOTE' });
        axios.post(`${baseUrl}/notes`, note)
            .then((response) => {
                dispatch({ type: "CREATE_NOTE_FULFILLED", payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: "CREATE_NOTE_REJECTED", payload: error })
            });
    }
}

export function update(note) {
    return function (dispatch) {
        dispatch({ type: 'UPDATE_NOTE' });
        axios.put(`${baseUrl}/notes/${note.id}`, note)
            .then((response) => {
                dispatch({ type: "UPDATE_NOTE_FULFILLED", payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: "UPDATE_NOTE_REJECTED", payload: error })
            });
    }
}

export function prepareToDelete(note) {
    return {
        type: 'PREPARE_TO_DELETE_NOTE',
        payload: note
    }
}

export function _delete(note) {
    return function (dispatch) {
        dispatch({ type: 'DELETE_NOTE' });
        axios.delete(`${baseUrl}/notes/${note.id}`)
            .then((response) => {
                dispatch({ type: "DELETE_NOTE_FULFILLED", payload: note })
            })
            .catch((error) => {
                dispatch({ type: "DELETE_NOTE_REJECTED", payload: error })
            });
    }
}

export function search(text) {
    return {
        type: 'SEARCH_NOTE',
        payload: text
    }
}