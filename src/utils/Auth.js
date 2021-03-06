const session = window.sessionStorage;

export const isLogin = () => {
  const authorization = session.getItem('authorization');
  return typeof authorization === 'string';
};

export const getToken = () => {
  const authorization = session.getItem('authorization');
  return authorization || undefined;
};

export const getUserId = () => {
  const userId = session.getItem('userid');
  return parseInt(userId) || undefined;
};
