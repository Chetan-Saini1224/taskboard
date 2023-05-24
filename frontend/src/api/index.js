import { API_URLS } from "../utils/URL_List";
const uid = localStorage.getItem('uid');

const customFetch = async (url, { body, ...customConfig }) => {
 
  const headers = {
    'content-type': 'application/json',
  };


  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = body;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error('error');
    return {
      message: error.message,
      success: false,
    };
  }
};

export const boarddata = () => {
  const {getBoardDtata} = API_URLS;
  return customFetch(getBoardDtata(), {
    method: 'POST',
    body: JSON.stringify({uid})
  });  
};

export const loginUser = (username,password) => {
   const {login} = API_URLS;
   return customFetch(login(),{
    method: 'POST',
    body: JSON.stringify({username,password})
   });      
}

export const signupUser = (username,password) => {
   const {signUp} = API_URLS;
   return customFetch(signUp(),{
    method: 'POST',
    body: JSON.stringify({username,password})
   });      
}

export const addNewList = (list_number,loggedInUser) => {
   const {createList} = API_URLS;
   return customFetch(createList(),{
    method: 'POST',
    body: JSON.stringify({list_number,loggedInUser})
   });      
}

export const addListItem = (list_number,content) => {
   const {createTask} = API_URLS;
   return customFetch(createTask(),{
    method: 'POST',
    body: JSON.stringify({list_number,content,uid})
   });      
}

export const getUserData = () => {
   const {getUser} = API_URLS;
   return customFetch(getUser(uid),{
    method: 'GET',
   });      
}

export const deleteListItem = (id) => {
   const {deleteTask} = API_URLS;
   return customFetch(deleteTask(id),{
    method: 'DELETE',
   });      
}