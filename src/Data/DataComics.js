//covwers
import coverInterstellar from "../assets/img/viaggioIntStellar/cover.jpg";
import coverVecchioCinese from "../assets/img/vecchioCinese/FINITO4.jpg";
import coverPeopleFucked from "../assets/img/peopleFucked/Image053.png";
import coverOdiEtAmo from "../assets/img/odiEtAmo/cover.jpg";

//characters
import kunVerme from "../assets/img/viaggioIntStellar/character/kunVerme.png";
import pizzamafia from "../assets/img/viaggioIntStellar/character/pizzamafia.png";

//comics
import odietamo from "../assets/img/odiEtAmo/odi.et.amo.siteversion2.png";

const DataComics = [
  {
    id: "viaggio-interstellare",
    titolo: "Viaggio Interstellare",
    cover: coverInterstellar,
    anno: "2021",
    produzione: "Digitale",
    completo: odietamo,
    storyline:
      "Viaggio Interstellare è un fumetto che narra la storia di un gruppo di astronauti che partono per un viaggio interstellare alla ricerca di un nuovo pianeta abitabile. Il viaggio, però, non è come se lo aspettavano e dovranno affrontare molte difficoltà.",
    cast: [
      {
        id: "kun-il-verme",
        nome: "Kun il Verme",
        foto: kunVerme,
        descrizione: "Kun è un verme che vive nel terreno del pianeta Terra",
      },
      {
        nome: "pizzamafia",
        foto: pizzamafia,
        descrizione: "pizzamafia è pizzamfia",
      },
    ],
  },
  {
    id: "vecchio-cinese-random",
    titolo: "Vecchio Cinese Random",
    cover: coverVecchioCinese,
    anno: "2019",
    produzione: "Digitale",
    completo: odietamo,
    storyline:
      "Vecchio Cinese Random è un fumetto che narra la storia di un vecchio cinese che, dopo aver perso tutto, decide di iniziare una nuova vita in un paese straniero. Il fumetto racconta le sue avventure e le sue disavventure in un mondo che non conosce.",
    cast: [
      {
        nome: "Kun il Verme",
        foto: "bo",
        descrizione: "Kun è un verme che vive nel terreno del pianeta Terra",
      },
    ],
  },
  {
    id: "people-are-fucked",
    titolo: "People Are Fucked",
    cover: coverPeopleFucked,
    anno: "2017",
    produzione: "Digitale",
    completo: odietamo,
    storyline:
      "Vecchio Cinese Random è un fumetto che narra la storia di un vecchio cinese che, dopo aver perso tutto, decide di iniziare una nuova vita in un paese straniero. Il fumetto racconta le sue avventure e le sue disavventure in un mondo che non conosce.",
    cast: [
      {
        nome: "Kun il Verme",
        foto: "bo",
        descrizione: "Kun è un verme che vive nel terreno del pianeta Terra",
      },
    ],
  },
  {
    id: "odi-et-amo",
    titolo: "Odi Et Amo",
    cover: coverOdiEtAmo,
    anno: "2022",
    produzione: "Digitale",
    completo: odietamo,
    storyline:
      "Vecchio Cinese Random è un fumetto che narra la storia di un vecchio cinese che, dopo aver perso tutto, decide di iniziare una nuova vita in un paese straniero. Il fumetto racconta le sue avventure e le sue disavventure in un mondo che non conosce.",
    cast: [
      {
        nome: "Kun il Verme",
        foto: "bo",
        descrizione: "Kun è un verme che vive nel terreno del pianeta Terra",
      },
    ],
  },
];
export default DataComics;
