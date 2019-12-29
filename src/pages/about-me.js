import React from "react"
import Layout from "../components/layout"
import aboutImg from "../../static/about.jpg"
import { Link } from "gatsby"

const timeOld = new Date("1970-01-01").toLocaleDateString()
const time = new Date("2019-12-28").toLocaleDateString()

export const Post = props => (
  <section className="post">
    <div className="post-heading-container">
      <h3 className="heading post-heading">{props.postHeading}</h3>
      <span>{props.time}</span>
    </div>
    <div>{props.children}</div>
  </section>
)

export default () => (
  <Layout>
    <h1 className="heading">O mnie, współpraca</h1>
    <div className="about">
      <Post postHeading="Krótko:" time={timeOld}>
        <div className="about-author">
          <img src={aboutImg} alt="author img" className="about-author-img" />
          <p className="post-paragraph about-author-paragraph">
            Nazywam się Aleksander Walczuk. Jestem programistą, tenisistą i
            narciarzem. Stworzyłem ten blog by podzielić się swoim podejściem do
            frontendu oraz pokazać jak to jest być początkującym w tej branży.
            Chętnie współpracuję i uczę się nowych technologii. Masz pomysł na apkę?
            Szukasz osób do pracy? Zapraszam, odwiedź zakładkę <Link to='./contact.js' className='post-link'>Kontakt.</Link>
          </p>
          <p className="post-paragraph"></p>
        </div>
      </Post>
      <Post postHeading="Trochę dłużej:" time={time}>
        <p className="post-paragraph">
          Frontendu uczyłem się nieregularnie, zacząłem na początku 2018r.
          Jestem samoukiem, jednak pod koniec 2019r zdecydowałem się na
          uczestnictwo w bootcampie. Mam solidne podstawy w kodowaniu stron
          statycznych, aktualnie poznaję JAM-Stacki. Moje  <strong>źródła wiedzy</strong> to:
          FreeCodeCamp, Medium, MDN, kanały youtube takie jak: Traversy Media,
          helloroman. Aktualnie poznaję Gatsby.js i GraphQL. Mój <strong>stack
          technologiczny</strong> w tej chwili to HTML, CSS, Sass, JS ES6, React, Redux i
          podstawy PHP. Brałem udział w warsztatach Webcamp #6, meetupach,
          targach i bootcampie organizowanym przez infoShare Academy.
        </p>
      </Post>
    </div>
  </Layout>
)
