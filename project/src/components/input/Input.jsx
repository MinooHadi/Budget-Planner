import styled from "styled-components";

//! styled component ........................................................................................................................
const InputMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 10px;
`;

const Inp = styled.input`
  width: 70%;
  padding: 5px;
  border: 1px solid gray;
  outline: none;
`;

//? Input component ........................................................................................................................
function Input(props) {
  return (
    <InputMain className="input-main">
      <label htmlFor=""> {props.lable} </label>
      <br />
      <Inp
        className="inp"
        type={props.type}
        placeholder={props.placeholder}
        style={props.style}
        ref={props.myRef}
        onInput={props.onInput}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </InputMain>
  );
}

export default Input;
