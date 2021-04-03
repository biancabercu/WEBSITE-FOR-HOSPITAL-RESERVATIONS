import {
    getUserByName,
    USER_NAME,
    USER_EMAIL,
    TIP,
    USER_PASSWORD
  } from "./GetUser";
  import { createUser } from "./PostUser";
  
  /**
   *  The return possibilities for the the two exposed services
   */
  export const FAIL = -1;
  export const SUCCESS = 0;
  export const DEFAULT = 1;
  
  export const authenticateUser = async (
    username: String,
    email: String, 
    tip: String,
    password: String,
    userDataHandler: Function
  ) => {
    let requestData = await getUserByName(username);
    if (requestData === undefined) {
      /**
       * The user has no valid account. Should be redirected to the sign-up page
       */
      return FAIL;
    } else {
      /**
       * Decompose request data
       */
      let user_password = requestData[USER_PASSWORD];
      if (user_password === password) {
        userDataHandler({
          userName: requestData[USER_NAME],
          userEmail: requestData[USER_EMAIL],
          userTip: requestData[TIP],
          userPassword: requestData[USER_PASSWORD]  
        });
        return SUCCESS;
      } else {
        return FAIL;
      }
    }
  };
  
  export const registerUser = async (
    username: String,
    email: String,
    tip: String,
    password: String,
    userDataHandler: Function
  ) => {
    /**
     *  Validate the input fields
     */
    if (username === "" || username === null || username === undefined) {
      return FAIL;
    }
    if (password === "" || password === null || password === undefined) {
      return FAIL;
    }
    /**
     * Verify if the username and passwords are available
     */
    let requestUserData = await getUserByName(username);
    if (requestUserData === undefined) {
      /**
       *  The username is available:
       *  1. Create user
       *  2. Verify if the POST was successful
       *  3. Return associated status
       */
      await createUser(username, email, tip, password);
      let validationData = await getUserByName(username);
      if (validationData === undefined) {
        /**
         * The sign up process was unsuccessful
         */
        return FAIL;
      } else {
        let validationPassword = validationData["user_password"];
        if (validationPassword === password) {
          /**
           * The sign up process was successful
           */
          userDataHandler({
            userName: validationData[USER_NAME],
            userEmail: validationData[USER_EMAIL],
            userTip: validationData[TIP],
            userPassword: validationData[USER_PASSWORD],
          });
          return SUCCESS;
        } else {
          return FAIL;
        }
      }
    }
  };
  