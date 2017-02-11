import merge from 'merge'

const initialState = {
    list: [],
    labels: [],
    isLoaded: false,
    searchText: '',
    editItem: null,
    deleteItem: null,
    account: null,
}

export default function (state = merge(true, initialState), action) {
    const { type, payload } = action
    switch (type) {
        case 'FETCH_USERS': {
            break;
        }
        case 'FETCH_ACCOUNT_FULFILLED': {
            return merge(true, state, { account: payload });
        }
        case 'FETCH_NOTES_FULFILLED': {
            return merge(true, state, { list: payload, isLoaded: true });
        }
        case 'FETCH_LABELS_FULFILLED': {
            return merge(true, state, { labels: payload });
        }
        case 'CANCEL_EDIT_NOTE': {
            return merge(true, state, { editItem: null, deleteItem: null });
        }
        case 'EDIT_NOTE_CHANGED': {
            return merge(true, state, { editItem: payload });
        }
        case 'PREPARE_TO_EDIT_NOTE': {
            return merge(true, state, { editItem: payload });
        }
        case 'CREATE_NOTE_FULFILLED': {
            let newList = state.list.map(item => item);
            newList.unshift(payload);
            return merge(true, state, { editItem: null, list: newList });
        }
        case 'UPDATE_NOTE_FULFILLED': {
            const list = state.list.map(item => item.id === payload.id ? payload : item);
            return merge(true, state, { editItem: null, list });
        }
        case 'PREPARE_TO_DELETE_NOTE': {
            return merge(true, state, { deleteItem: payload });
        }
        case 'DELETE_NOTE_FULFILLED': {
            const list = state.list.filter(item => item.id !== payload.id)
            return merge(true, state, { deleteItem: null, list: list });
        }
        case 'SEARCH_NOTE': {
            return merge(true, state, { searchText: payload });
        }
    }
    return state;
}