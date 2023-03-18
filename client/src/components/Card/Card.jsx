import { CardContainer, PicBioContainer, Pic, UList, LI, Label } from "./Card.styles";

const Card = ({ userData, winner }) => {
  const propNames = [
    "username",
    "name",
    "location",
    "titles",
    "favorite-language",
    "total-stars",
    "highest-starred",
    " public-repos",
    "perfect-repos",
    "followers",
    "following"
  ];

  return (
    <CardContainer>
      <PicBioContainer>
        <Pic src={userData.avatar_url} alt="Profile" />
        <p>{userData.bio}</p>
      </PicBioContainer>
      <UList>
        {userData ? propNames.map((property, index) => (
          <LI key={index} >
            <Label
              className={
                winner && property === winner.winningProperty
                  ? "winner"
                  : ""
              }>
              {property}
            </Label>
            {property === "titles" ? (
              <span>{userData.titles?.join(", ")}</span>
            ) : (
              <span>{userData[property]}</span>
            )}
          </LI>
        ))
          : null}
      </UList>

    </CardContainer >
  )
}

export default Card