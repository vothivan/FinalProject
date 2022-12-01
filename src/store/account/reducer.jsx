export const ACTION_TYPE = {
    GET_ACCOUNT_START: 'GET_ACCOUNT_START',
    GET_ACCOUNT_SUCCESS: 'GET_ACCOUNT_SUCCESS',
    GET_ACCOUNT_FAIL: 'GET_ACCOUNT_FAIL',
};

const initialState = {
    profile: [],
};

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case ACTION_TYPE.GET_ACCOUNT_START:
        case ACTION_TYPE.GET_ACCOUNT_SUCCESS:
            return {
                ...state,
                profile: action.profile,
            }
        case ACTION_TYPE.GET_ACCOUNT_FAIL:
    }
}