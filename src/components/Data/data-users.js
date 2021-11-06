const endpoint = "https://randomuser.me/api/?results=15";

export const getUserList = () => {
  return fetch(endpoint)
    .then((resp) => resp.json())
    .then((users) => users.results);
};
