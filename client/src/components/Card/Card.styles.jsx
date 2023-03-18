import styled from "styled-components"

export const CardContainer = styled.div` 
	position: relative;
	display: flex;
	align-items: flex-start;
	gap: 50px;
	width: fit-content;
	max-width: 90vw;
	padding: 50px;
	margin: 50px 0;
	background-color: #fff;
	border: 1px solid rgb(0, 0, 0);
	border-radius: 15px;
	box-shadow: 0px 5px #E0E0E0;
	@media screen and (max-width: 900px) {
		 flex-direction: column; 
		align-items: center;
		font-size: 12px;
	}
`

export const PicBioContainer = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  width: 30rem;
  margin-left: 2rem;
  text-align: center;
`

export const Pic = styled.img` 
  height: 10rem;
  width: 10rem; 
	display: block;
	border-radius: 50%;
	border: 3px solid #545454;
`

export const UList = styled.ul` 
  
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  list-style-type: none;
  font-size: 1.1rem;  
`;

export const LI = styled.li`
	gap: 10px;
	@media screen and (max-width: 900px) {
		gap: 5px;
	}
 display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 10px;

`;

export const Label = styled.div`
	padding: 0 5px;
	background-color: #E1F1FF;
	border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.5);
	&.winner {
		background-color: #f0a431;
		padding: 3px 8px;
		& + span {
			font-weight: 800;
		}
	}
`;
