import {useState,useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios  from 'axios';
import config from '../config';

const EmpList =()=>{

  const [MyEmployees, setMyEmployees] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    // load all the services created by user
    employeelist()
  }, [])
  
  //get all services
  const employeelist=()=>{
    //create axios api to send data to server
    const url = config.serverURL+`/admin/employee/showemployees`;

    axios.get(url).
    then((response)=>{
      const res = response.data
      console.log("result",res)
      setMyEmployees(res)
    })

   
  }

  //delete any services
  const deleteemployee=(id)=>{
    const url = config.serverURL+`/admin/employee/${id}`;

    axios.delete(url,id).
    then((response)=>{
      console.log(response)
      employeelist();
    })
  }
  // //edit any services
  // const editemployee=()=>{
    
  // }
  return(
    <div className='container'>
    <h1 style = {{textAlign: 'center', color:'navy', marginTop:20}} >Employee List</h1>
    <table className='table table-striped' style={{marginTop:50}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Phone Number</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {MyEmployees.map((employees) => {
                return (
                  <tr>
                    <td>{employees.id}</td>
                    <td>{employees.firstName}</td>
                    <td>{employees.phoneNum}</td>
                    <td>{employees.salary}</td>
                    <td>{employees.empStatus}</td>
                    <td>{employees.deptName}</td>
                    <td>
                      <Link to={'/updateemp/'+`${employees.id}`}>
                      <button
                      //  onClick={() => editemployee(employees.id)}
                        style={styles.button}
                        className='btn btn-sm btn-success'>
                        Edit
                      </button>
                      </Link>
                      <button
                        onClick={() => deleteemployee(employees.id)}
                        style={styles.button}
                        className='btn btn-sm btn-danger'>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
    </div>
  )
}

const styles = {
  h3: {
    textAlign: 'center',
    margin: 20,
  },
  button: {
    marginRight: 10,
  },
}
export default EmpList

