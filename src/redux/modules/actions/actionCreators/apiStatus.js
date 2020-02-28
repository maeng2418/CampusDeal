import { BEGIN_API_CALL, API_CALL_ERROR } from "../actionTypes/apiStatus";

const beginApiCall = () => ({ 
    type: BEGIN_API_CALL 
})


const apiCallError = () => ({
    type: API_CALL_ERROR
})

const apiStatusActionCreators = {
    beginApiCall,
    apiCallError
};

export default apiStatusActionCreators;