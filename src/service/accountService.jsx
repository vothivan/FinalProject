import api from "./api"
const getProfileUrl = '/accounts/profile';

export const getProfileApi = () => {
    return api.get(getProfileUrl);
}