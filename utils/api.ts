export const fetchAPI = async () => {
  const response = await fetch(`https://api.chucknorris.io/jokes/random`);
  return response.json();
};
