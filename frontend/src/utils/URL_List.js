const API_ROOT = 'http://localhost:5000';

export const API_URLS = {
    login: () => `${API_ROOT}/user/login`,
    signup: () => `${API_ROOT}/users/signup`,
    getBoardDtata: () => `${API_ROOT}/`,
    createList: () => `${API_ROOT}/list/create`,
    createTask: () => `${API_ROOT}/task/create`,
    deleteTask: (id) =>  `${API_ROOT}/task/${id}`,
    login : () => `${API_ROOT}/user/login`,
    signUp : () => `${API_ROOT}/user/signup`,
    getUser : (id) => `${API_ROOT}/user/${id}`,
}
