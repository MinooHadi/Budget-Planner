function Input(props) {
  return (
    <>
      <label htmlFor=""> {props.lable} </label>
      <input type={props.text} />
    </>
  );
}

export default Input
