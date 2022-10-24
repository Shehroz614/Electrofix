export async function post(url = "", data = {}) {
  const Auth_Token = localStorage.getItem("Auth_Token");

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Auth_Token" : Auth_Token,
    },

    body: JSON.stringify(data),
  });
  return response.json();
}

export async function get(url = "", data = {}) {
  const Auth_Token = localStorage.getItem("Auth_Token");

  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Auth_Token" : Auth_Token,
    },

    
  });
  return response.json();
}

export async function patch(url = "", data = {}) {
  const Auth_Token = localStorage.getItem("Auth_Token");

  const response = await fetch(url, {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Auth_Token" : Auth_Token,
    },

    body: JSON.stringify(data),
  });
  return response.json();
}
