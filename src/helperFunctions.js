// Refactoring async functions to avoid repetition everywhere and
// cleaning up the rest of the app

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// id, method, params, process data

// helper with body (PUT, POST)
// Pending: bodyless helpers (GET, DELETE)
const editOffer = async (id, path, method, params, fn) => {
  const reqData = JSON.stringify(params);

  const reqOptions = {
    method: method,
    headers: myHeaders,
    body: reqData,
    redirect: "follow",
    credentials: "include",
  };

  await fetch(`https://peka-api-wt2x.onrender.com/${path}`, reqOptions).then(
    (response) =>
      response
        .text()
        .then((result) => {
          const data = JSON.parse(result);
          console.log(data);
          fn(data);
        })
        .catch((err) => console.log("error", err))
  );
};
