import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
import store from "../store/index"

const initialState = {
    articles: []
}

function rootReducer(state = initialState, action) {

    // reduce for ADD_ARTICLE action
    if(action.type === ADD_ARTICLE) {
        return Object.assign({}, state, { 
            articles: state.articles.concat(action.payload)
        })
    }

    // reduce for REMOVE_ARTICLE action
    if(action.type === REMOVE_ARTICLE) {

        const deleteArticle = (element) => {
            return action.payload.id !== element.id
        }
        // remove article logic
        return Object.assign({}, {
            // filter out items with id
            articles: state.articles.filter(deleteArticle)
        })
    }

    return state;
}

export default rootReducer;