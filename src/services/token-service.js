import { constants } from "./service-constants"

class StorageService {

    setToken = (token) => {
        sessionStorage.setItem(constants.API_TOKEN, token);
    }
    getToken = () => {
        return sessionStorage.getItem(constants.API_TOKEN);
    }
    removeToken = () => {
        sessionStorage.clear();
    }
}
export default new StorageService();