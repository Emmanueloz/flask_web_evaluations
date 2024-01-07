import { getTokenCookie } from "../token.js";

const URL_API = "http://localhost:5000/api/";

export const addTeacher = (teacher) => {
  return fetch(`${URL_API}teacher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
    body: JSON.stringify(teacher),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const getAllTeacher = (page = 1, limit = 10) => {
  return fetch(`${URL_API}teacher?page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};

export const getTeacher = (id) => {
  return fetch(`${URL_API}teacher/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenCookie(),
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
