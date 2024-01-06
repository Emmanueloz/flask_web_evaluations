import { getTokenCookie } from "../token.js";

const URL_API = "http://localhost:5000/api/";

export const addEvaluation = (evaluation) => {
  return fetch(`${URL_API}evaluation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
    body: JSON.stringify(evaluation),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
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

export const getEvaluation = (id) => {
  return fetch(`${URL_API}evaluation/${id}`, {
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

export const updateEvaluation = (evaluation) => {
  return fetch(`${URL_API}evaluation/${evaluation.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
    body: JSON.stringify(evaluation),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
