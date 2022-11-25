// Refactoring async functions to avoid repetition everywhere and
// cleaning up the rest of the app

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// id, method, params, process data

// helper with body (PUT, POST)
// Pending: bodyless helpers (GET, DELETE)
const editOffer = async (path, method, params, fn) => {
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

  await fetch(`https://peka-api-wt2x.onrender.com/offers/${id}`, requestOptions)
    .then((response) => {
      response.text();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log("error", err));

  fn(newOffers);
}

export { editOffer, deleteOffer };
