const Avatar = (props) => {
    return ( 
        <img className={`avartar ${props.className}`} src={props.imgsrc} alt={props.alt}/>
     );
}
 
export default Avatar;