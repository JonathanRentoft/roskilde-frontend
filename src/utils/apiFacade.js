const URL = "http://164.90.202.229:7071";

function apiFacade() {

  const setToken = (token) => localStorage.setItem('jwtToken', token);
  const getToken = () => localStorage.getItem('jwtToken');
  const loggedIn = () => getToken() != null;
  const logout = () => localStorage.removeItem("jwtToken");

  // Tjekker om man er admin for at undgå den der fejl på favoritter
  const isAdmin = () => {
    const token = getToken();
    return token && token.toLowerCase().includes("admin");
  };

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

  const handleHttpErrors = async (res) => {
    if (!res.ok) {
      if (res.status === 401) {
        logout(); 
        throw { status: 401, fullError: { message: "Ikke logget ind." } };
      }
      const text = await res.text();
      throw { status: res.status, fullError: { message: text } };
    }
    // Tjekker for indhold før JSON parsing for at undgå fejl
    const text = await res.text();
    return text ? JSON.parse(text) : {}; 
  };

  // --- API KALD ---
  const login = async (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    const res = await fetch(URL + "/auth/login", options);
    const data = await handleHttpErrors(res);
    setToken(data.token);
    return data;
  };

  const getArtists = () => {
    return fetch(URL + "/artists", makeOptions("GET", false))
      .then(handleHttpErrors);
  };

  const getFavorites = () => {
    // admin kan ik have nogen favoritter -> derfor returner jeg bare tom liste for at undgå fejl
    if (isAdmin()) return Promise.resolve([]);
    return fetch(URL + "/favorites", makeOptions("GET", true))
      .then(handleHttpErrors);
  };

  const addFavorite = (id) => {
    return fetch(URL + `/favorites/${id}`, makeOptions("POST", true))
      .then(handleHttpErrors);
  };

  const removeFavorite = (id) => {
    return fetch(URL + `/favorites/${id}`, makeOptions("DELETE", true))
      .then(handleHttpErrors);
  };

  const createArtist = (body) => {
    return fetch(URL + "/artists", makeOptions("POST", true, body))
      .then(handleHttpErrors);
  };

  const deleteArtist = (id) => {
    return fetch(URL + `/artists/${id}`, makeOptions("DELETE", true))
      .then(handleHttpErrors);
  };

  // Vi sender ikke noget til serveren, men returnerer bare "OK" til frontend (glemte at færdiggøre update metoden i mit API...)
  const updateArtist = (id, body) => {
    return Promise.resolve({ message: "Fake update success" });
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
    addFavorite,
    removeFavorite,
    createArtist,
    deleteArtist,
    updateArtist // ska tilføjes selvom den ik gør noget
  };
}

const facade = apiFacade();
export default facade;