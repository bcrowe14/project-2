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
const button = document.querySelector('button')
const breedInput = document.querySelector('input')
const imageDiv = document.querySelector('div')
const divv = document.querySelector('divv')
const divvv = document.querySelector('divvv')


button.addEventListener('click',async () => {

  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/gengar`) //response is convention for axios
  console.log(response.data.forms[0].name);

  let gengarPic = response.data.sprites.front_default
  imageDiv.innerHTML = `<img src=${gengarPic} />`

  let gengarName = response.data.forms[0].name
  divv.innerHTML = `${gengarName}`

//=== Joke api inside Pokemon api===//
//   let response2 = await axios.get("https://v2.jokeapi.dev/joke/Programming")

//   let jokeText = response2.data.joke
//    divvv.innerHTML = `${jokeText} `
})