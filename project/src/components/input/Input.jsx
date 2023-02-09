function Input(props) {
  return (
    <>
      <label htmlFor=""> {props.lable} </label>
      <input type={props.type} />
    </>
  );
}

export default Input
