const POST_URL = "http://18.219.43.178/create_user";
export const createUser = async (
  user_name: String,
  user_email: String,
  tip: String,
  password: String
  

//   bio: String
// export const USER_NAME = "user_name";
// export const USER_EMAIL = "user_email";
// export const TIP = "tip";
// export const USER_PASSWORD = "password";
) => {
  let formBodyArray = [];
  formBodyArray.push(`user_name=${user_name}`);
  formBodyArray.push(`user_email=${user_email}`);
  formBodyArray.push(`tip=${tip}`);
  formBodyArray.push(`password=${password}`);
  let formBody = formBodyArray.join("&");

  let data = await fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "no-cors",
    body: formBody,
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
