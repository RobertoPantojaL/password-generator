import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

export const colors = {
  color1: "#00686c",
  color2: "#32c2b9",
  color3: "#edecb3",
  color4: "#fad928",
  color5: "#ff9915",
}

export const Nav = styled.nav`
  background-color: ${colors.color1};
  padding: 1rem;
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 1rem;

  @media (max-width: 640px) {
    justify-content: center;
  }
`

export const NavButton = styled.button`
  background-color: ${(props) => (props.active ? colors.color5 : "transparent")};
  color: white;
  border: 2px solid ${colors.color5};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.color5};
  }
`

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
min-height: 78.5vh;
  @media (max-width: 840px) {
    margin: 1rem;
  }
`

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`

export const Title = styled.h1`
  color: ${colors.color1};
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;

  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${colors.color2};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.color1};
  }
`

export const Button = styled.button`
  background-color: ${colors.color5};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  &:hover {
    background-color: ${colors.color4};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: ${colors.color3};
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.color4};
  }
`

export const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
`

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
  border: 4px solid ${colors.color3};
  border-top: 4px solid ${colors.color1};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const PasswordInput = styled(Input)`
  flex-grow: 1;
`

export const IconButton = styled(Button)`
  padding: 0.5rem;
  min-width: 40px;
`

