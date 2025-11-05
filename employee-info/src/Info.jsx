import "./Info.css";

function Info ({Name,EmployeeID,Role,Department,DateOfJoining,EmploymentType,Location,Experience,ContactDetails,Salary,Skills,Education}) {
    

  const experienceNumber = parseFloat(Experience); // will extract leading number = experience 1 string ahe mhanun tyala aapn num madhe convert kela

  let isIncrement = experienceNumber > 2 ? "Increment of 15%" : "none";

  return (
    <div className="Info">
      <p>Name : {Name}</p>
      <p>Employee ID : {EmployeeID}</p>
      <p>Role : {Role}</p>
      <p>Department : {Department}</p>
      <p>Date Of Joining : {DateOfJoining}</p>
      <p>Employment Type : {EmploymentType}</p>
      <p>Location : {Location}</p>
      <p>Experience : {Experience}</p>
      <p>Increment : {isIncrement}</p>
      <p>Contact Details : {ContactDetails}</p>
      <p>Salary : {Salary}</p>
      <p>Skills : <ul>{Skills.map((skill, idx) => <li key={idx}>{skill}</li>)}</ul></p>       {/* React me har ek list ko index dena zaruri hy. Isliye har ek skill ko ek idx derahe hy */}
      <p>Education : {Education}</p>
    </div>

    );
    
}




export default Info;