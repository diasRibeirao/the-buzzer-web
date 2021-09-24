import * as AiIcons from 'react-icons/ai'

function Star({data}) {
  
    return (
        <>
           <div>
                {[...Array(parseInt(data))].map((star, i) => {        
                    return (<AiIcons.AiFillStar key={i}/>);
                })}
            </div>
        </>
    );
}

export default Star;