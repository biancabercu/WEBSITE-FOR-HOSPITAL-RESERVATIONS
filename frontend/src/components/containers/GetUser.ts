const GET_URL = "http://18.219.43.178/get_user/id_0001";
/**
 * User type decomposition parameters
 *
 */

export const USER_NAME = "user_name";
export const USER_EMAIL = "user_email";
export const TIP = "tip";
export const USER_PASSWORD = "password";


export const getUserByName = async (username: String) => {
  if (username != "" || username != null) {
    const composedURL = `${GET_URL}${username}`;

    let data = await fetch(composedURL, { method: "GET", mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));

    return await data;
  }
};
