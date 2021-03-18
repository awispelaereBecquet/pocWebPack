import retrieveContent from "./query.js";
import configBase from "./global-config.js";
import "./style.scss";
async function showContent() {
  try {
    for (let i = 0; i < configBase.nbOfLorem; i++) {
      const content = await retrieveContent();
      let elt = document.createElement("p");
      elt.innerHTML = `<p>Ci dessus l'inertion n°${
        i + 1
      } </p><p>${content}</p>`;
      elt.classList.add(`superClass${i + 1}`);
      document.getElementsByTagName("body")[0].appendChild(elt);
    }
  } catch (e) {
    console.log("Error", e);
  }
}

showContent();
