import { ACTION_TYPE } from "./reducer"

export const getProfile = () => {
    return (dispatch) => {
        dispatch({ type: ACTION_TYPE.GET_ACCOUNT_START });
        return getProfileApi().then(
            (response) => {
                if (response && response.status === 200) {
                    dispatch({
                        type: ACTION_TYPE.GET_ACCOUNT_SUCCESS,
                        profile: response.data,
                    })
                    return response.data;
                } else {
                    dispatch({ type: ACTION_TYPE.GET_ACCOUNT_FAIL })
                }
            },
            () => dispatch({ type: ACTION_TYPE.GET_ACCOUNT_FAIL })
        )
    }
}