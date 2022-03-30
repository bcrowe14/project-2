// //====  joke API ====
// const button = document.querySelector('button')
// const div = document.querySelector('div')

// button.addEventListener('click', async() =>{
//   let response = await axios.get("https://v2.jokeapi.dev/joke/Programming")
//   console.log(response.data.joke)
//   //console.log(response.data)

//   let jokeText = response.data.joke
//   div.innerHTML = `${jokeText} `

// })

//====  Pokemon API ====
//const button = document.querySelector('button')
//const breedInput = document.querySelector('input')
const imageDiv = document.querySelector("imgDiv");
const nameDiv = document.querySelector("nameDiv");
const infoDiv = document.querySelector("infoDiv");

//Gengar//
gengarBtn.addEventListener("click", async () => {
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/gengar`); //response is convention for axios
  console.log(response.data.types[0].type.name);

  let gengarPic = response.data.sprites.front_default;
  imageDiv.innerHTML = `<img class="img-class" src=${gengarPic} />`;

  let gengarName = response.data.forms[0].name;
  nameDiv.innerHTML = `Name: ${gengarName}`;

  let gengarInfo = response.data.types[0].type.name;
  infoDiv.innerHTML = `Type: ${gengarInfo}`;
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

  let randomPic = randomResponse.data.sprites.front_default;
  imageDiv.innerHTML = `<img class="img-class" src=${randomPic} />`;

  let randomName = response.data.results[random].name;
  nameDiv.innerHTML = `Name: ${randomName}`;

  let randomInfo = randomResponse.data.types[0].type.name;
  infoDiv.innerHTML = `Type: ${randomInfo}`;

  console.log(randomName);
  console.log(response.data.results[random].url);

  //=== Joke api inside Pokemon api===//
  //   let response2 = await axios.get("https://v2.jokeapi.dev/joke/Programming")

  //   let jokeText = response2.data.joke
  //    divvv.innerHTML = `${jokeText} `
});
