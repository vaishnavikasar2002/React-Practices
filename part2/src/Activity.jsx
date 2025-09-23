
// Activity = show a hello msg to the user in different colors
// pass 2 values as props:userName & textColor

function Activity({userName,textColor}) {
    // let txt = {color : textColor};
    return <h1 style={{color : textColor}}>Hello, {userName}</h1>  
}
export default Activity;