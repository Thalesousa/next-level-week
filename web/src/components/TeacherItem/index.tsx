import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/37390511?s=460&u=8df0e51b5c91f47639142f1c12f38291ef5d7fb9&v=4"
          alt="Thales Sousa"
        />
        <div>
          <strong>Thales Sousa</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias e química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratórios e por a vida das pessoas
        através de experiencias. mais de 200.000 pessoas já passaram por uma das
        minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;