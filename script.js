/*const getCharacters = async function () {
  const url = "https://anapioficeandfire.com/api/characters/";
  try {
    const response = await fetch(url);
    const characters = await response.json();
    console.log(characters);
  } catch (error) {
    console.log(`there was an error: ${error}`);
  }
};*/

const getOneCharacter = async function () {
  const id = document.getElementById("characterId").value;
  const url = `https://swapi.dev/api/people/${id}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const character = data.name;
    console.log(character);
    const gifreq = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=OLTvx63ETQkS8fRhqQYdEY0Ixq5Be72m&q=${character}&limit=1&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const gifdata = await gifreq.json();
    console.log(gifdata.data[0].embed_url);
    document.getElementById("gifImg").src = gifdata.data[0].embed_url;
  } catch (error) {
    console.log(`there was an error: ${error}`);
  }
};

/*fetch("https://swapi.dev/api/people").then((response) => {
  const people = response.json().then((people) => {
    console.log(people);
  });
});
*/
