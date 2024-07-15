const state = {
  players: [],
};

const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2406-ftb-et-web-ft`;

const getPuppies = async () => {
  try {
    const response = await fetch(baseURL + `/players`);
    const responseJson = await response.json();
    const playersFromAPI = responseJson.data.players;
    state.players = playersFromAPI;
    console.log(playersFromAPI);
  } catch (err) {
    console.error(err);
  }
};

getPuppies();
