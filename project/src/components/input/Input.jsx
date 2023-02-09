import "./../../assets/styles/input.css"

function Input(props) {
  return (
    <div className="input-main">
      <label htmlFor=""> {props.lable}: </label><br />
      <input className="inp" type={props.type} />
    </div>
  );
}

export default Input
