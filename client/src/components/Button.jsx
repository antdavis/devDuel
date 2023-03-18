import styled from "styled-components"


const Button = styled.button` 
  width: ${({ w }) => w ? w : '9em'};
  height: ${({ h }) => h ? h : '2.5em'};
  border: 1px solid black;
  background: ${({ bg }) => bg ? bg : '#fff'};
  border-radius: 10px;
  font-size: 30px;
  box-shadow: 0px 5px #E0E0E0;
  &:hover {
      cursor: pointer;
  }
`

export default Button;