const Button = (props) => {
    return ( 
        <button className={`button ${props.className}`} style={props.style} onClick={() => {props.onClick(props.id)}} type={props.type}>
            {props.hasIcon && <img src={props.icon} alt={props.alt}/>}
            {props.text}
        </button>
     );
}
 
export default Button;