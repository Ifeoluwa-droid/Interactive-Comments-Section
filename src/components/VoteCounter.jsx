const VoteCounter = (props) => {
    return ( 
        <div className='vote-counter'>
            <img className="icon" src='./images/icon-plus.svg' alt='icon-plus'/>
            <p className="votes">{props.votes}</p>
            <img className="icon" src='./images/icon-minus.svg' alt='icon-minus'/>
        </div>
     );
}  
 
export default VoteCounter;