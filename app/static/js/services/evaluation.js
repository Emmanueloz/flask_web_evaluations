import { getTokenCookie } from "../token.js";

const URL_API = "http://localhost:5000/api/";

export const addEvaluation = (evaluation) => {
  fetch(`${URL_API}evaluation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
    body: JSON.stringify(evaluation),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Puedes manejar la respuesta aquí
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

export const getAllEvaluation = () => {
  return fetch(`${URL_API}evaluation`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
