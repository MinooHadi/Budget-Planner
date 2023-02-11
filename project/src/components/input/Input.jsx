import "./../../assets/styles/input.css"

function Input(props) {
  return (
    <div className="input-main">
      <label htmlFor=""> {props.lable} </label><br />
      <input className="inp" type={props.type} placeholder={props.placeholder} style={props.style} ref={props.myRef} />
    </div>
  );
}

export default Input
