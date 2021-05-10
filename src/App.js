import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./context/ThemeContext";

import { Header } from "./components/Header";
import { Home } from "./views";

import { Title } from "./components/Text";
import { MoonIcon, SunIcon } from "./components/Icons";

const Wrapper = styled.div`
  background: ${({ isDark }) => isDark ? "#292829" : "#F4F2F7"};
  color: ${({ isDark }) => isDark ? "#FFFEFE" : "#292829"};
  height: 100%;
  margin: 0;
  padding: 0;
  widht: 100%;
  transition: all 0.2s ease;
`

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper isDark={isDark}>
      <Header
        logo={<Title text="Rick and Morty with Platzi 💚" />}
        onClick={toggleTheme}
        actionButton={
          isDark
            ? <SunIcon fill="white" height={28} width={28} />
            : <MoonIcon height={28} width={28} />
        }
      />
      <Home />
    </Wrapper>
  );
}

export default App;
