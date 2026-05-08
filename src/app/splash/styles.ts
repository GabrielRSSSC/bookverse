import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.97); }
  100% { opacity: 1; transform: scale(1); }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f3ecbe; /* Fundo que combina com o do protótipo */
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px; /* Limite de tamanho para não esticar muito em telas grandes */
  width: 90%;
  animation: ${fadeIn} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards, 
             ${float} 5s ease-in-out infinite;
`;

/* Animação da barra de carregamento */
const load = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  /* Centraliza na imagem, e desce um pouco para ficar perto do círculo da ilustração original */
  top: 53%; 
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 6px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
`;

export const LoadingBar = styled.div`
  height: 100%;
  background: #1a1a1a; /* Cor bem escura, baseada no traço do desenho */
  border-radius: 10px;
  animation: ${load} 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;
