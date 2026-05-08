import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const PageWrapper = styled.div`
  background-color: #F2E7C4;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  color: #3E2723;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  
  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    gap: 15px;
  }
`;

export const Logo = styled.div`
  background-color: #3E2723;
  color: #F2E7C4;
  padding: 10px 25px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const SearchBarContainer = styled.div`
  background-color: #3E2723;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border-radius: 20px;
  width: 35%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  &:focus-within {
    border-color: #F2E7C4;
    width: 42%;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  input {
    background: transparent;
    border: none;
    color: #F2E7C4;
    margin-left: 12px;
    width: 100%;
    outline: none;
    font-size: 1rem;
    &::placeholder {
      color: rgba(242, 231, 196, 0.6);
    }
  }
  
  svg {
    color: #F2E7C4;
    opacity: 0.8;
  }
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 15px;
`;

export const IconCircle = styled.div`
  background-color: white;
  color: #3b2a1e;
  width: 45px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    background-color: #3E2723;
    color: white;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex: 1;
  padding: 0 60px 20px 60px;
  gap: 40px;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ImageSection = styled.div`
  flex: 1.5;
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  height: 520px; /* Um pouco maior para o cadastro */
  min-height: 520px;
  box-shadow: 0 20px 50px rgba(44, 24, 16, 0.12);
  background-color: #B3A480;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 40px;
  text-align: center;
`;

export const ImageTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 25px;
  line-height: 1.1;
  
  span {
    color: #F2E7C4;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  background-color: #B3A480;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 480px;
  width: 100%;
  min-height: 540px;
  color: #3E2723;
`;

export const FormHeader = styled.div`
  margin-bottom: 5px;
`;

export const FormTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0;
  color: #3E2723;
`;

export const FormSubtitle = styled.p`
  color: #3E2723;
  opacity: 0.8;
  font-size: 0.95rem;
  margin-top: 5px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 0.85rem;
  color: #3E2723;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(62, 39, 35, 0.2);
  border-radius: 12px;
  padding: 14px 18px;
  font-size: 0.95rem;
  width: 100%;
  outline: none;
  transition: all 0.2s ease-in-out;
  color: #3E2723;

  &:focus {
    border-color: #3E2723;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  &::placeholder {
    color: rgba(62, 39, 35, 0.4);
  }
`;

export const SubmitButton = styled.button`
  background-color: #3E2723;
  color: #F2E7C4;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2C1810;
  }
`;

export const LoginPrompt = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  color: #3E2723;
  opacity: 0.8;
  margin-top: 5px;
  
  a {
    color: #3E2723;
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 4px;
    
    &:hover {
      color: #1A0F0A;
      opacity: 1;
    }
  }
`;
