import "./Card.css";
import Price from "./Price";

function Card({title,idx }) {
   
  let oldPrice = ["12,498", "11,800" , "1,494" , "2,388"];
  let newPrice = ["10,095", "6,990" , "1,294" , "1,520"];
  let description = [["8,000 DPI","5 Programmable Buttons"],["Intuitive surface","Designed for iPad Pro"] ,["Designed for iPad Pro","Intuitive Touch Surface"] ,["Wireless", "Optieal Orientation"]];

    return (
        <div className="Card">
            <h4> {title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}></Price>
        </div>
    );

  }

export default Card;