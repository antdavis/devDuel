import { useState } from "react";

import { InspectContainer } from "../Inspect.styles";
import Input from "../../components/Input";
import Button from "../../components/Button"
import { inspectUser } from "../../services/userService"
import Error from "../../components/Error";
import { Card } from "../../components";

const Inspect = () => {
  const [username, setUsername] = useState();
  const [userData, setUserData] = useState("");
  const [error, setError] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);


  const getUserData = async () => {
    let result = await inspectUser(username);
    if (result.message === undefined) {
      setError(false);
      setUserData(result);
      setToggleInfo(true);
    }
    else {
      setError(true);
      setToggleInfo(false);
    }


  }

  return (
    <InspectContainer>
      <Input
        onChange={e => setUsername(e.target.value)}
        placeholder="username"
      />
      <Button h='2em' onClick={() => getUserData(username)}>
        Inspect
      </Button>
      {error && <Error username={username}></Error>}
      {toggleInfo && <Card userData={userData} />}
    </InspectContainer>
  )
};

export default Inspect;