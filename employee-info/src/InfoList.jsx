import Info from "./Info.jsx"

function InfoList () {
    let option1 = ["HTMl ", "CSS ", "JavaScript"];
    return (
        <div className="container">
        <Info Name="Vaishnavi Kasar" EmployeeID ="EMP1001" Role ="Frontent Developer" Department= "Web Development" DateOfJoining ="01-july-2025" EmploymentType = "Intern" Location ="Pune" Experience ="3 months" ContactDetails = "vaishnavi@gmail.com +91-9852896984" Salary ={20000} Skills ={option1} Education= "Computer Science" ></Info>
        <Info Name="Chetan pawar" EmployeeID ="EMP1002" Role ="Data Analyst" Department= "Data Science" DateOfJoining ="01-Feb-2019" EmploymentType = "Full Time" Location ="USA" Experience ="6 year" ContactDetails = "ChetanPawar@gmail.com +91-5692012694" Salary ={100000} Skills ={["Python" ,"Power BI ","Statistics"]} Education= "B.Tech"></Info>
        <Info Name="Akshada Jadhav" EmployeeID ="EMP1003" Role ="HR Executive" Department= "Human Resources" DateOfJoining ="01-jan-2021" EmploymentType = "Full Time" Location ="USA" Experience ="4 year" ContactDetails = "akshadajashdv@gmail.com +91-5265896984" Salary ={70000} Skills ={["HR Management ","MS","HR"]} Education= "MBA"></Info>
        <Info Name="Rahul Patil" EmployeeID ="EMP1004" Role ="Backend Developer" Department= "IT" DateOfJoining ="01-july-2023" EmploymentType = "Full Time" Location ="Mumbai" Experience =" 2 year" ContactDetails = "rahulpatil@gmail.com +91-6924986984" Salary ={40000} Skills ={["Java ","Node.js ","SQL "]} Education= "BSC Computer Science"></Info>
    </div>
    )


}

export default InfoList; 