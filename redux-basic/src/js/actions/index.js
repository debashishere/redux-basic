import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types"



function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

function removeArticle(payload) {
    return { type: REMOVE_ARTICLE, payload}
}


export {
    addArticle,
    removeArticle,
}



