export const fetchUsersAction = () => async (dispatch, getState, api) => {
  try {
    const resp = await api.get("/users");

    dispatch({ type: "USERS_LOADED", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAdmins = () => async (dispatch, getState, api) => {
  try {
    const resp = await api.get("/admins");

    dispatch({ type: "ADMINS_LOADED", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  try {
    const resp = await api.get("/current_user");

    dispatch({ type: "FETCH_CURRENT_USER_SUCCESS", payload: resp.data });
  } catch (error) {
    console.log(error);
  }
};
