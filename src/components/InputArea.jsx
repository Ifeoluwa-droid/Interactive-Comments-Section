import Avatar from "./Avatar";
import Button from "./Button";

const InputArea = ({userImage, ...props}) => {
    return ( 
        <div class="input-area" style={props.style}>
           <Avatar
               className="unshow-on-mobile"
               imgsrc={userImage}
           />
         <div className="show-on-mobile">
            <Avatar
                  imgsrc={userImage}
            />
            <Button 
            style={{
               background: 'hsl(238, 40%, 52%)',
               color: 'hsl(0, 0%, 100%)',
               padding: '1rem 2rem',
               borderRadius: '.5rem'
            }}
            hasIcon={false}
            text="SEND"
           />
         </div>
           <textarea placeholder="Add a comment..." rows="4"></textarea>
           <Button 
            className="unshow-on-mobile"
            style={{
               background: 'hsl(238, 40%, 52%)',
               color: 'hsl(0, 0%, 100%)',
               padding: '1rem 2rem',
               borderRadius: '.5rem'
            }}
            hasIcon={false}
            text="SEND"
           />
        </div>
     );
}
 
export default InputArea;