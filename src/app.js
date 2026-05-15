import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let pronoun = ['the', 'our', 'my'];
  let adj = ['small', 'old', 'beautiful'];
  let noun = ['cat', 'house', 'bike'];
  let domain = ['.es', '.com', '.io'];

  for (let pronoun of pronoun) {
    for (let adj of adj) {
      for (let noun of noun) {
        for (let domain of domain) {
          console.log(pronoun + adj + noun + domain)
        }


      }
    }
  }

};
