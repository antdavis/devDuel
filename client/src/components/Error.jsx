import styled from 'styled-components'

const ErrorMessage = styled.div` 
  padding-top: 15px;
  font-size: 25px;
  color: #cc0000;
`

const Error = () => {
  return (
    <ErrorMessage>The user was not found..</ErrorMessage>

  );
};

export default Error;