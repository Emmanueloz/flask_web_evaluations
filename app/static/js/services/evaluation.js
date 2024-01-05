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
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};
