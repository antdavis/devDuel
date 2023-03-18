import styled from "styled-components";

export const DuelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  height: 40%;
`

export const CardContainer = styled.div` 
	display: flex;
	flex-direction: ${({ direction }) => direction || "row"};
	justify-content: center;
	align-items: center;
	gap: 25px;
	max-width: 100vw;
	@media screen and (max-width: 900px) {
		flex-direction: column;

	}

`
export const WinnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Winner = styled.h1` 
    color: #fdd813;
  padding: 0;
  margin: 0;
  @media (max-width: 1200px) {
    margin-top: 8rem;
  }
`