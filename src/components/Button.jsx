const Button = (props) => {
    return ( 
        <button className="button" style={props.style} onClick={() => {props.Onclick(props.id)}}>
            {props.hasIcon && <img src={props.icon} alt={props.alt}/>}
            {props.text}
        </button>
     );
}
 
export default Button;