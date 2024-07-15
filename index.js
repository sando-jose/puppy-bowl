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
    renderPlayers();
  } catch (err) {
    console.error(err);
  }
};

const renderPlayers = () => {
  const main = document.querySelector(`main`);
  const ol = document.createElement(`ol`);
  state.players.forEach((player) => {
    const newLI = document.createElement(`li`);
    newLI.innerText = player.name;
    newLI.addEventListener(`click`, (event) => {
      const clickedPlayer = state.players.find((player) => {
        return player.name === event.target.innerText;
      });
      main.innerHTML = `
      <h1>${clickedPlayer.cohortId}</h1>

      <img src="${clickedPlayer.imageUrl}"/>

      <button id="backButton">Back</button>

      `;
      //create back button below
      const backButton = document.getElementById(`backButton`);
      backButton.addEventListener(`click`, () => {
        window.location.reload();
      });
    });
    ol.append(newLI);
  });
  main.append(ol);
};

//grab the main
//create an ordered list
//forEach loop through the players
// create a list item
// put player's name in the LI
//attach player LI's to the ol
//attach the ol to the main
//create back button
getPuppies();
