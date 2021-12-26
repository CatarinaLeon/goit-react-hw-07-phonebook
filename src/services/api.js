const BASE_URL = "https://61bb5963e943920017784e35.mockapi.io";

// Получить данные
const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getData = (endpoint, options) => fetchData(endpoint, options);

// сохранить элемент
const saveItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

// удалить элементы
const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: "DELETE", ...options });

export { getData, saveItem, deleteItem };
