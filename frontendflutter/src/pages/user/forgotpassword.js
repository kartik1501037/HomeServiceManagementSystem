import { useNavigate } from 'react-router-dom'
import Images from "../../images/image1_location.png"
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'
import config from '../config'
const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);

    const verify = () => {
        const body = {
            email
        }
        const url = config.serverURL + '/user/forgetpassword';
        axios.post(url, body).then((res) => {
            console.log(res.data);
            console.log(res.status);
            setStatus(res.status)
        }).catch(error => {
            console.log(error)
            console.log(error.response.status)
            setStatus(error.response.status)
        })
    }
    const forgotpassword = () => {
        if (email.length === 0) {
            toast.error('please enter code')
        } else if (NewPassword.length === 0) {
            toast.error('please enter new password')
        } else if (ConfirmPassword.length === 0) {
            toast.error('please enter confirm password')
        } else if (ConfirmPassword.length === NewPassword) {
            toast.error('please enter same password')
        }
        else {
            const body = {
                email,
                password: NewPassword
            }
            const url = config.serverURL + '/user/forgetpassword/change';
            axios.post(url, body).then((res) => {
                if (res.status === 200) {
                    toast.success("Password Change Sucessfully")
                    navigate('../signin')
                }
                else {
                    toast.error("You Cant Change Password")
                    navigate('./home')
                }

            })
        }
    }

    return (
        <div style={styles.container1}>
            <div style={{ marginTop: 0 }}>
                <div style={styles.container}>
                    <div className='mb-3'>
                        <label>Email :</label>
                        <input onChange={(e) => { setEmail(e.target.value) }}
                            className='form-control' type={'email'}
                            placeholder="xyz@gmail.com" />
                    </div>
                    {(status === 200) ? <span style={{ "color": "green", marginLeft: "33%" }}>Email verified</span> : <button style={styles.Button}
                        onClick={verify} className=''>verify
                    </button>}
                    {(status === 200) ? <div>
                        <div className='mb-3'>
                            <label>New password</label>
                            <input onChange={(e) => { setNewPassword(e.target.value) }}
                                className='form-control' type='password' placeholder="Your New password" />
                        </div>

                        <div className='mb-3'>
                            <label>confirm password</label>
                            <input onChange={(e) => { setConfirmPassword(e.target.value) }}
                                className='form-control' type='password' placeholder="confirm your password" />
                        </div>

                        <div className='mb3' style={{ marginTop: 40 }}>
                        </div>

                        <button style={styles.Button}
                            onClick={forgotpassword} className=''>Create Password
                        </button>
                    </div> : <>{(status === 0) ? "" : <span style={{ "color": "red", marginLeft: "33%" }}>User Not Exit ???</span>}</>
                    }



                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: 400,
        height: "inherit",
        padding: 20,
        position: 'relative',
        backgroundColor: 'white',
        top: 100,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        borderColor: '#663399',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'solid',
        boxShadow: '1px 1px 10px 1px white'

    },

    container1: {
        backgroundImage: `url(${Images})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
    },

    Button: {
        position: 'relative',
        width: '100%',
        height: 40,
        backgroundColor: 'navy',
        color: 'white',
        borderRadius: 5,
        border: 'none',
        marginTop: 10,
    },

}
export default ForgotPassword