import get from "lodash/get";

export const isAuthenticated = state => !!state.auth;

export const getProfile = state => get(state, "auth._json", {});
