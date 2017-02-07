import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import notes from './notesReducer.js'

export default combineReducers({
  notes,
  routing: routerReducer
});