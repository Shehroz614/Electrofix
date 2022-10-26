

const initialState = {
    user: null,
    isLoggedIn : false
  };


 export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SignIn":
        return {
          ...state,
          user : action.payload,
          isLoggedIn : true
        };

        case "SignOut":
        return {
          ...state,
          user : null,
          isLoggedIn : false
        };
  
  
      
      default:
        return state;
    }
  };

