import { combineReducers} from "redux"
import {menuItems, subMenuCollapse} from "./menuItems"
import {addSpeaking, speakingQuestions}  from "./crudReducers"





const rootReducer = combineReducers({
    menuItems,
    subMenuCollapse,
    addSpeaking,
    speakingQuestions

})

export default rootReducer
