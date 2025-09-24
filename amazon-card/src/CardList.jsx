import Card from "./Card.jsx";

function CardList() {
  let styles = {
    display:"flex",
    flexWrap : "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

    return (
        <div style={styles}>

          <Card title ="Logitech MX Master" idx={0}/>
          <Card title ="Apple Pencil (2nd Gen)" idx={1}/>
          <Card title ="Zebronics" idx={2}/>
          <Card title ="Petronics Tool" idx={3}/>
         
        
      </div>
    );
}

export default CardList;
