import React, { useState } from "react";
import reset from "styled-reset";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Document from "./Components/Document";
import Preparation from "./Components/Preparation";
import Community from "./Components/Community";
import Blog from "./Components/Blog";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

const Support = styled.p`
  text-align: center;
  padding: 15px;
  font-size: 15px;
  color: white;
  background-color: #16181d;
`;

const Span = styled.span`
  color: #61dafb;
`;

const Nav = styled.nav`
  background-color: #20232a;
  color: white;
  padding: 20px;
`;

const Introduction = styled.section`
  background-color: #282c34;
  color: white;
  text-align: center;
  height: 350px;
  font-size: 28px;
`;
const Title = styled.h1`
  padding: 40px 0 30px;
  font-weight: 800;
  color: #61dafb;
  font-size: 55px;
`;

const StartBtn = styled.button`
  background-color: #61dafb;
  padding: 15px 20px;
  font-size: 20px;
  margin-top: 56px;
  &:hover {
    background-color: white;
  }
`;

const ReadPreparation = styled.button`
  background-color: transparent;
  font-size: 20px;
  margin-top: 56px;
  color: #61dafb;

  &:hover {
    color: white;
  }
`;

const TxtSections = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const FontSize = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeigt};
  font-color: ${(props) => props.fontColor};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Support>
        <a
          href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine"
          target="_blank"
        >
          <span>Support Ukraine πΊπ¦</span>
          <Span> Help Provide Humanitarian Aid to Ukraine.</Span>
        </a>
      </Support>

      <Nav>
        <BrowserRouter>
          <Link to="" style={{ margin: "0 5px" }}>
            ν
          </Link>
          <Link to="/document" style={{ margin: "0 5px" }}>
            λ¬Έμ
          </Link>
          <Link to="/preparation " style={{ margin: "0 5px" }}>
            μμ΅μ
          </Link>
          <Link to="/blog" style={{ margin: "0 5px" }}>
            λΈλ‘κ·Έ
          </Link>
          <Link to="/community" style={{ margin: "0 5px" }}>
            μ»€λ?€λν°
          </Link>

          <Routes>
            <Route path="/" exact component={App} />
            <Route path="/document" exact component={Document} />
            <Route path="/preparation" exact component={Preparation} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/community" exact component={Community} />
          </Routes>
        </BrowserRouter>
      </Nav>

      {/* <button>κ²μμ΄λ―Έμ§</button>
      <span>v18.0.0</span>
      <span>Languages</span> */}

      <Introduction>
        <Title>
          <h1>React</h1>
        </Title>
        <p className="intro">
          μ¬μ©μ μΈν°νμ΄μ€λ₯Ό λ§λ€κΈ° μν JavaScript λΌμ΄λΈλ¬λ¦¬
        </p>

        <BrowserRouter>
          <StartBtn>
            <Link to="/start " style={{ margin: "0 5px" }}>
              μμνκΈ°
            </Link>
          </StartBtn>

          <ReadPreparation>
            <Link to="/preparation " style={{ margin: "0 5px" }}>
              μμ΅μ μ½μ΄λ³΄κΈ° >
            </Link>
          </ReadPreparation>
        </BrowserRouter>
      </Introduction>

      <TxtSections>
        <Section
          title={"μ μΈν"}
          content="Reactλ μνΈμμ©μ΄ λ§μ UIλ₯Ό λ§λ€ λ μκΈ°λ μ΄λ €μμ μ€μ¬μ€λλ€. μ νλ¦¬μΌμ΄μμ κ° μνμ λν κ°λ¨ν λ·°λ§ μ€κ³νμΈμ. κ·ΈλΌ Reactλ λ°μ΄ν°κ° λ³κ²½λ¨μ λ°λΌ μ μ ν μ»΄ν¬λνΈλ§ ν¨μ¨μ μΌλ‘ κ°±μ νκ³  λ λλ§ν©λλ€.
          
μ μΈν λ·°λ μ½λλ₯Ό μμΈ‘ κ°λ₯νκ³  λλ²κ·ΈνκΈ° μ½κ² λ§λ€μ΄ μ€λλ€."
        ></Section>

        <Section
          title={"μ»΄ν¬λνΈ κΈ°λ°"}
          content="μ€μ€λ‘ μνλ₯Ό κ΄λ¦¬νλ μΊ‘μνλ μ»΄ν¬λνΈλ₯Ό λ§λμΈμ. κ·Έλ¦¬κ³  μ΄λ₯Ό μ‘°ν©ν΄ λ³΅μ‘ν UIλ₯Ό λ§λ€μ΄λ³΄μΈμ.
        μ»΄ν¬λνΈ λ‘μ§μ ννλ¦Ώμ΄ μλ JavaScriptλ‘ μμ±λ©λλ€. λ°λΌμ λ€μν νμμ λ°μ΄ν°λ₯Ό μ± μμμ μμ½κ² μ λ¬ν  μ μκ³ , DOMκ³Όλ λ³κ°λ‘ μνλ₯Ό κ΄λ¦¬ν  μ μμ΅λλ€."
        ></Section>

        <Section
          title={"ν λ² λ°°μμ μ΄λμλ μ¬μ©νκΈ°"}
          content="κΈ°μ  μ€νμ λλ¨Έμ§ λΆλΆμλ κ΄μ¬νμ§ μκΈ° λλ¬Έμ, κΈ°μ‘΄ μ½λλ₯Ό λ€μ μμ±νμ§ μκ³ λ Reactμ μλ‘μ΄ κΈ°λ₯μ μ΄μ©ν΄ κ°λ°ν  μ μμ΅λλ€.
        Reactλ Node μλ²μμ λ λλ§μ ν  μλ μκ³ , React Nativeλ₯Ό μ΄μ©νλ©΄ λͺ¨λ°μΌ μ±λ λ§λ€ μ μμ΅λλ€."
        ></Section>
      </TxtSections>
    </>
  );
}

function Section({ title, content }) {
  return (
    <>
      <FontSize fontSize="24px" fontColor="lightgray" fontWeigt="500">
        <h2>{title}</h2>
      </FontSize>
      <p>{content}</p>
    </>
  );
}

export default App;
