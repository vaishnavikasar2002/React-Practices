import {useState} from "react";

function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0 });
    let [count, setCount] = useState(0);

    let updateBlue = () => {
        moves.blue += 1;
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        }); //Blue moves cha count show hota bec move la sperd kela means new value pass keli {...prevMove, blue:prevMoves.blue+1}
    }

    
    let updateYellow = () => {
        moves.yellow += 1;
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        }); 
    }

    
    let updateGreen = () => {
        moves.green += 1;
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        }); 
    }

    
    let updateRed = () => {
        moves.red += 1;
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        }); 
    }

    return  (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                 <p>Yellow moves = {moves.yellow} </p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
                 <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
                 <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            </div>
        </div> 
    );
}

export default LudoBoard;