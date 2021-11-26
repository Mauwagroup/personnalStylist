import { createStore } from 'redux'

function settingsReducer(state = {}, action) {
  switch (action.type) {
    case 'set':
      return { data: action.data }
    default:
      return state
  }
}

function dataReducer(state = {}, action) {
  switch (action.type) {
    case 'set':
      return { data: action.data }
    default:
      return state
  }
}

let SettingStore = createStore(settingsReducer)
let MainStore = createStore(dataReducer)

export {SettingStore, MainStore}
