export const getTokenCookie = () => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((cookie) => cookie.startsWith("access_token="));
  if (cookie) {
    return cookie.split("=")[1];
  }
  return null;
};
