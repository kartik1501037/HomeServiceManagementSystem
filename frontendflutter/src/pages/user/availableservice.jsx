import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import img from '../../images/home2.jpg';
import config from '../config';
//import { fontSize } from '@mui/system';
//import { colors } from 'react-select/dist/declarations/src/theme';
//import UploadImage from '../uploadimage';


export default function AvailableService() {
  const [MyServices, setMyServices] = useState([]);
  //const navigate =useNavigate();

  useEffect(() => {
    servicelist();

  }, []);

  const servicelist = () => {
    const url = config.serverURL + `/admin/services/showservices`;


    axios
      .get(url)
      .then((response) => {
        const res = response.data;
        console.log("result", res);
        setMyServices(res)
      })
  }

  return (

    <div style={styles.container1}>

      <h2 style={{ textAlign: "center", color: "black" }}>
        Our Services
      </h2>
      <div style={{ marginTop: 30, textAlign: "centre" }} >
        {MyServices.map((myservice) => {
          const imageUrl = config.serverURL + `/admin/image/download/${myservice.id}`
          return (
            <div
              key={myservice.id}
              className='col-3'
              style={{
                position: 'relative',
                padding: 20,
                display: 'inline-block',
                cursor: 'pointer',
                width: 400,

              }}>
              <div
                style={{
                  width: 30,
                  height: 30,
                  position: 'absolute',
                  right: 40,
                  top: 30,

                }}>

              </div>
              <img
                alt='service'
                style={{
                  height: 350,
                  width: '100%',
                  display: 'block',
                  borderRadius: 10,
                }}
                src={imageUrl}
              />
              <div style={{ marginTop: 20, color: "darkblue", fontFamily: 'Helvetica' }} >
                <Link to={'/bookservice/' + myservice.id} >
                  <h5 className='card-title' style={{ fontSize: 30 }}>{myservice.serviceName} </h5>
                  <h6 style={{ fontSize: 20, fontStyle: 'italic', marginTop: 5 }}>
                    {myservice.shortDesc}
                  </h6>
                  <h6 style={{ fontSize: 20 }}> Rs. {myservice.serviceCharge} </h6>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

    </div>


  )
}


const styles = {


  // container1: {
  //   backgroundImage: `url(${img})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   width: "100%",
  //   height: "100vh"
  // },


};
