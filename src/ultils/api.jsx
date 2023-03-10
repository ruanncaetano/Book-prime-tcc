const api = (page, options = {}) => {
  const baseURL = "https://r3l2e3.sse.codesandbox.io";
  return fetch(`${baseURL}/api/${page}`, options);
};

export default api;
