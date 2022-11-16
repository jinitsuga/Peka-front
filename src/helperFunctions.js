// Refactoring async functions to avoid repetition everywhere and
// cleaning up the rest of the app

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// id, method, params, process data
const editOffer = async (id, method, params) => {
  const reqData = JSON.stringify(params);

  const reqOptions = {
    method: method,
    headers: myHeaders,
    body: reqData,
    redirect: "follow",
    credentials: "include",
  };
};
