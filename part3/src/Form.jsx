// --topic3 = event object

function handleFormSubmit(event) { 
    event.preventDefault(); //console madhala screen vr disnya sathi, jr he line nhi lihi tr print hot lagech cut houn jata ,(event) varchya line madhala te pn lihaych
    console.log("form was submitted");
    console.log(event);//submit button var click kel tr to event object console madhye print hoil
} 

function Form () {
    return (
        <form > 
            <hr></hr>
            <h1>Form - event object</h1>
            <input placeholder="write something" /> 
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}

export default Form;