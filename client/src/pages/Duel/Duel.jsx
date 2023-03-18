import { useEffect, useState } from "react";

import { DuelContainer, CardContainer, WinnerCard, Winner } from "./Duel.styles";
import Input from "../../components/Input";
import Button from "../../components/Button"
import { duelUsers } from "../../services/userService";
import Error from "../../components/Error";
import { Card } from "../../components";

const Duel = () => {
  const [username1, setUsername1] = useState();
  const [username2, setUsername2] = useState();
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [error, setError] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const [winner, setWinner] = useState("");

  const getUserData = async () => {
    let result = await duelUsers(username1, username2);
    if (result.message === undefined) {
      setError(false);
      setUser1(result[0]);
      setUser2(result[1]);
      findWinner(result[0], result[1]);
      setToggleInfo(true);
    }
    else {
      setError(true);
      setToggleInfo(false);
    }
  }

  const findWinner = (user1, user2) => {

    let score1 = 0;
    let score2 = 0;

    const scoredTraits = [
      "total-stars",
      "highest-starred",
      " public-repos",
      "perfect-repos",
      "followers"
    ];

    scoredTraits.forEach(trait => {
      score1 += user1[trait] || 0;
      score2 += user2[trait] || 0;
    });

    if (score1 === score2)
      setWinner("tie");
    else if (score1 > score2)
      setWinner(user1.name);
    else
      setWinner(user2.name);

    return winner;
  }

  return (
    <DuelContainer>
      <div style={{ display: 'flex', flexDirection: 'row ' }}>
        <Input
          mr='10px'
          onChange={e => setUsername1(e.target.value)}
          placeholder="username1"
        />
        <Input
          ml='10px'
          onChange={e => setUsername2(e.target.value)}
          placeholder="username2"
        />
      </div>
      <Button h='2em' onClick={() => getUserData(username1, username2)}>
        Duel
      </Button>
      {error && <Error></Error>}
      {toggleInfo && (
        <CardContainer>
          <WinnerCard style={{ marginTop: user1.name === winner ? "" : "75px" }}>
            {console.log("here " + winner)}
            {user1.name === winner ? <Winner>Winner!!!!</Winner> : null}
            < Card userData={user1} />
          </WinnerCard>
          {"tie" === winner ? <Winner>Tie!!!!</Winner> : null}
          <WinnerCard style={{ marginTop: user2.name === winner ? "" : "75px" }}>
            {user2.name === winner ? <Winner>Winner!!!!</Winner> : null}
            < Card userData={user2} />
          </WinnerCard>
        </CardContainer>
      )}
      <div style={{ marginTop: '25px' }}>Winner is chosen by summing the following: total-stars, highest-starred, public-repos, perfect-repos, followers</div>
    </DuelContainer >
  )
};


export default Duel;

