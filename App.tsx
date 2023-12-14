import { useState } from "react";
import "./App.css";

import logoImg from "./assets/logo.png";

function App() {
  const [textPhrase, setTextPhrase] = useState("");
  const [categorySelected, setCategorySelected] = useState(0);

  const allPhrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "“Acredite em si mesmo e todos os seus sonhos se tornarão realidade.”",
        "“Não importa o quão devagar você vá, desde que você não pare.” - Confúcio",
        "“O sucesso não é o final, o fracasso não é fatal: é a coragem para continuar que conta.” - Winston Churchill",
        "“A única maneira de fazer um excelente trabalho é amar o que você faz.” - Steve Jobs",
        "“O futuro pertence àqueles que acreditam na beleza de seus sonhos.” - Eleanor Roosevelt",
        "“A vida é 10% o que acontece conosco e 90% como reagimos a isso.” - Charles R. Swindoll",
        "“Acredite que você pode, e você já está na metade do caminho.” - Theodore Roosevelt",
        "“O único lugar onde o sucesso vem antes do trabalho é no dicionário.” - Vidal Sassoon",
        "“Não espere. O tempo nunca será o ideal.” - Napoleon Hill",
        "“Você perde 100% dos tiros que não dá.” - Wayne Gretzky",
      ],
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "“Bom dia! Que seu dia seja tão maravilhoso quanto o amanhecer.”",
        "“Acorde e brilhe, é um novo dia. Bom dia!”",
        "“Bom dia! Que cada momento do seu dia seja especial.”",
        "“Que seu dia seja tão brilhante quanto o sol. Bom dia!”",
        "“Bom dia! Que você tenha um dia cheio de alegria e felicidade.”",
        "“Bom dia! Que seu dia seja cheio de amor e paz.”",
        "“Bom dia! Que você tenha um dia produtivo e gratificante.”",
        "“Bom dia! Que seu dia seja tão doce quanto o canto dos pássaros.”",
        "“Bom dia! Que seu dia seja cheio de momentos inesquecíveis.”",
        "“Bom dia! Que você tenha um dia cheio de risos e alegria.”",
      ],
    },
    {
      id: 3,
      nome: "Bem estar",
      frases: [
        "“Cuide do seu corpo. É o único lugar que você tem para viver.” - Jim Rohn",
        "“A saúde não é tudo, mas sem ela, tudo o mais é nada.” - Arthur Schopenhauer",
        "“A saúde é a maior posse. A alegria é o maior tesouro. A confiança é o maior amigo.” - Lao Tzu",
        "“A saúde é um estado de completo bem-estar físico, mental e social, e não apenas a ausência de doença ou enfermidade.” - Organização Mundial da Saúde",
        "“O bem-estar não é uma meta, é um estilo de vida.”",
        "“A paz começa com um sorriso.” - Madre Teresa",
        "“A felicidade é a maior forma de saúde.” - Dalai Lama",
        "“A verdadeira saúde envolve todos os aspectos do ser humano, incluindo o corpo, a mente e o espírito.”",
        "“O autocuidado não é egoísmo, é auto-preservação.”",
        "“O bem-estar é a jornada, não o destino.”",
      ],
    },
  ];

  function handleSwitchCategory(index: number) {
    setCategorySelected(index);
  }

  function randomPhrase() {
    const aleatoryNumber = Math.floor(
      Math.random() * allPhrases[categorySelected].frases.length
    );

    setTextPhrase(allPhrases[categorySelected].frases[aleatoryNumber]);
  }

  return (
    <>
      <div className="container">
        <img src={logoImg} alt="logo frases" className="logo" />

        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allPhrases.map((item, index) => (
            <button
              key={item.id}
              className={`category-button ${
                item.nome === allPhrases[categorySelected].nome ? "active" : ""
              }`}
              style={{
                borderWidth:
                  item.nome === allPhrases[categorySelected].nome ? 2 : 0,
                borderColor: "#1af",
              }}
              onClick={() => handleSwitchCategory(index)}
            >
              {item.nome}
            </button>
          ))}
        </section>

        <button className="button-phrase" onClick={randomPhrase}>
          Gerar frase
        </button>

        {textPhrase !== "" && <h3 className="random-phrase">{textPhrase}</h3>}
      </div>
    </>
  );
}

export default App;
