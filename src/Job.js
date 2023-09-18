const Job = (object) => {
  return ( 
    <div className="job">
      <h1>My Salary is: {object.salary}</h1>
      <p>My Position is: {object.position}</p>
      {object.dude && <p>My Dude is: {object.dude.toString()}</p>}
      <p>My Company is: {object.company}</p>
    </div>
   );
}   
 
export default Job;