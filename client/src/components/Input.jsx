import styled from "styled-components";

const Input = styled.input.attrs({ type: "text", oninput: "this.size = this.value.length" })` 

	width: 40ch;
  text-align: center;
	height: 3em;
	padding: 0 10px;
	font-size: 18px;
	background-color: #E1F1FF;
	border: 1px solid rgba(0, 0, 0, 0.75);
  margin-bottom: 25px;
	border-radius: 15px;
	margin-right: ${({ mr }) => mr};
	margin-left: ${({ ml }) => ml};
	&:focus {
		outline: none;
		background-color: #c2d9e8;
	}
	&::placeholder {
		color: #647d9f;
	}
  
`

export default Input;