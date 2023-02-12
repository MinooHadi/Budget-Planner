import styled from "styled-components";

//! styled component ........................................................................................................................
const Btn = styled.button`
  width: 60px;
  height: 40px;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;

//? Button component ........................................................................................................................
function Button(props) {
  return (
    <Btn className="btn" onClick={props.onClick}>
      {props.text}
    </Btn>
  );
}

export default Button;
