function search(event) {
  event.preventDefault();
  let searching = document.querySelector("#search-input");
  generate(searching.value);
}

function generate(input) {
  let key = `77bdfc047f054f23dabe6bdof740t2a3`;
  let prompt = `generate a poem about ${input}`;
  let context = `you are an AI with vast knowledge in french and poetry, write a poem that is short, precise and lovely. let there be spacing between each line of the poem`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  console.log(input);
  axios.get(apiUrl).then(poem);
}
function poem(lovely) {
  console.log("processing");

  new Typewriter(".poem", {
    strings: `${lovely.data.answer}`,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
}
let submitButton = document.querySelector("form");
submitButton.addEventListener("submit", search);
