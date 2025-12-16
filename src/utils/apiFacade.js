const URL = "http://164.90.202.229:7071";

function apiFacade() {

  const setToken = (token) => localStorage.setItem('jwtToken', token);
  const getToken = () => localStorage.getItem('jwtToken');
  const loggedIn = () => getToken() != null;
  const logout = () => localStorage.removeItem("jwtToken");

  const handleHttpErrors = (res) => {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }

  const makeOptions = (method, addToken, body) => {
    const opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      }
    };
    if (addToken && loggedIn()) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  const login = async (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    const res = await fetch(URL + "/auth/login", options);
    const data = await handleHttpErrors(res);
    setToken(data.token);
    return data;
  };

  // Optimerede fetch metoder (One-liners)
  const getArtists = () => {
    return fetch(URL + "/artists/", makeOptions("GET", false)).then(handleHttpErrors);
  };

  const getFavorites = () => {
    return fetch(URL + "/favorites/", makeOptions("GET", true)).then(handleHttpErrors);
  };

  const addFavorite = (id) => {
    return fetch(URL + `/favorites/${id}/`, makeOptions("POST", true)).then(handleHttpErrors);
  };

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    getArtists,
    getFavorites,
    addFavorite
  };
}

const facade = apiFacade();
export default facade;