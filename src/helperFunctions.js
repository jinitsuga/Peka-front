// Refactoring async functions to avoid repetition everywhere and
// cleaning up the rest of the app

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const editOffer = async (path, method, params, fn) => {
  const reqData = JSON.stringify(params);

  const reqOptions = {
    method: method,
    headers: myHeaders,
    body: reqData,
    redirect: "follow",
    credentials: "include",
  };

  await fetch(`${process.env.REACT_APP_API_URL}${path}`, reqOptions).then(
    (response) =>
      response
        .text()
        .then((result) => {
          // const data = JSON.parse(result);
          console.log(result);
        })
        .then((data) => {
          fn();
        })
        .catch((err) => console.log("error", err))
  );
  console.log("offer editada");
};

async function deleteOffer(id, index, userOffers, fn) {
  // const offerId = userOffers.find((offer, index) => index === id).id;

  const newOffers = userOffers.filter((offer) => offer != userOffers[index]);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
    credentials: "include",
  };

  await fetch(`${process.env.REACT_APP_API_URL}offers/${id}`, requestOptions)
    .then((response) => {
      response.text();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log("error", err));

  fn(newOffers);
}

const sendOffer = async (method, params) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const reqData = JSON.stringify(params);

  console.log(reqData);

  const requestOptions = {
    method: method,
    headers: myHeaders,
    body: reqData,
    redirect: "follow",
    credentials: "include",
  };

  await fetch(`${process.env.REACT_APP_API_URL}offers`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const getUserOffers = async (method, userid, fn) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: method,
    headers: myHeaders,
    redirect: "follow",
    credentials: "include",
  };

  await fetch(
    `${process.env.REACT_APP_API_URL}users/${userid}/offers`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      fn(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export { editOffer, deleteOffer, sendOffer, getUserOffers };
