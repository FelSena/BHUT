const API = async (endPoint: string) => {
  const output = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `http://api-test.bhut.com.br:3000/api/${endPoint}`
    )}`
  )
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => JSON.parse(data.contents));
  return output;
};
export default API;
