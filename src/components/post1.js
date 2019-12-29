import React from "react"
import { Post } from "./posts"
import { Link } from "gatsby"
import {
  codecompletion,
  extenstionsNames,
  formatters,
  git,
  look,
  preview,
  sass,
} from "./post1data"
import img1 from "../../static/code-1076536_640.jpg"

export const ListItem = props => (
  <li>
    {props.category}
    <ul>
      {props.arr.map(item => (
        <li key={item.name}>
          <span>{item.name}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  </li>
)

const postImgs = [img1]

const time = new Date("2019-12-28").toLocaleDateString()

export default () => (
  <Post
    postHeading="Dodatki do VS Code, mój config"
    imgSrc={postImgs[0]}
    time={time}
  >
    <p className="post-paragraph">
      Cześć! <br /> Słowem wstępu postanowiłem podzielić się z Wami listą
      dodatków do VS Code z jakich korzystam. Będzie to też pierwszy post z
      kategorii środowiska deweloperskiego. Jeśli zupełnie niespodziewacie się
      co to mogą być za dodatki, możecie rzucić okiem na sekcję&nbsp;
      <Link to="./about-me" className="post-link">
        O mnie
      </Link>
      . VSC to mój edytor nr. 1, chociaż wolę korzystać z IDE, a dokładniej
      Webstorma 🧐. Postaram się je podzielić na kategorie i posortować. Opiszę
      też te, które mogą być warte uwagi, a ich nazwa nie mówi sama za siebie.
      Oglądajcie, testujcie:
    </p>
    <ol>
      <ListItem category="Wygląd: " arr={look} />
      <ListItem category="Formattery: " arr={formatters} />
      <ListItem category="Code Completion: " arr={codecompletion} />
      <ListItem category="Sass/CSS: " arr={sass} />
      <ListItem category="Live preview: " arr={preview} />
      <ListItem category="Git: " arr={git} />
      <ListItem category="Pozostałe: " arr={extenstionsNames} />
    </ol>
    <p className="post-paragraph"></p>
  </Post>
)
