export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const isUserLogin = ({ auth }) => auth.isLogin;
export const getUser = (state) => state.auth.user;
export const isAvatarLoading = ({ auth }) => auth.avatarLoading;
