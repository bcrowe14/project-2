//====  Pokemon API ====
//const button = document.querySelector('button')
//const breedInput = document.querySelector('input')
const imageDiv = document.querySelector("imgDiv");
const nameDiv = document.querySelector("nameDiv");
const infoDiv = document.querySelector("infoDiv");
const infoDivOne = document.querySelector("infoDivOne");

//Gengar//
gengarBtn.addEventListener("click", async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/gengar`); //response is convention for axios
  console.log(response.data.abilities[0].ability.name);

  let gengarPic = response.data.sprites.front_default;
  imageDiv.innerHTML = `<img class="img-class" src=${gengarPic} />`;

  let gengarName = response.data.forms[0].name;
  nameDiv.innerHTML = `Name: ${gengarName}`;

  let gengarInfo = response.data.types[0].type.name;
  infoDiv.innerHTML = `Type: ${gengarInfo}`;

  let gengarAbility = response.data.abilities[0].ability.name;
  infoDivOne.innerHTML = `Ability: ${gengarAbility}`;
});

//Random Pokemon
randomBtn.addEventListener("click", async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon`); //response is convention for axios
  
  let random = Math.floor(Math.random() * 19);
  console.log(response.data);

  //console.log(response.data.results[random])
  //console.log(random);

  let randomResponseUrl = response.data.results[random].url;
  let randomResponse = await axios.get(`${randomResponseUrl}`);
//image
  let randomPic = randomResponse.data.sprites.front_default;
  imageDiv.innerHTML = `<img class="img-class" src=${randomPic} />`;
//name
  let randomName = response.data.results[random].name;
  nameDiv.innerHTML = `Name: ${randomName}`;
//type
  let randomInfo = randomResponse.data.types[0].type.name;
  infoDiv.innerHTML = `Type: ${randomInfo}`;
//ability
  let randomAbility = randomResponse.data.abilities[0].ability.name;
  infoDivOne.innerHTML = `Ability: ${randomAbility}`;

  console.log(randomName);
  console.log("response: "+ randomResponse.data.abilities[0].ability.name);

  //Home Button


});
