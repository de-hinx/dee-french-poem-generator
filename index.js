function search(event) {
  event.preventDefault();
  let searching = document.querySelector("#search-input");
  generate(searching.value);
}

function generate(input) {
  let key = `77bdfc047f054f23dabe6bdof740t2a3`;
  let prompt = `generate a poem about ${input}`;
  let context = `you are an AI with vast knowledge in french poetry, generate a poem according to the user input in the prompt, it should follow basic html format and be a maximum of five lines, the lines should have break lines seperated by a <br/> element and the poem should be signed by 'SheCodes AI' in <strong> element at the end of the poem`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  console.log(input);
  axios.get(apiUrl).then(poem);
  let newPoem = document.querySelector("#poetry");
  newPoem.classList.remove("hide");
  newPoem.innerHTML = `⏳ Generating Poem about ${input}`;
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
