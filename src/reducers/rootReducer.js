import { combineReducers} from "redux"
import {menuItems, subMenuCollapse} from "./menuItems"
import addSpeaking  from "./crudReducers"





const rootReducer = combineReducers({
    menuItems,
    subMenuCollapse,
    addSpeaking
})

export default rootReducer
