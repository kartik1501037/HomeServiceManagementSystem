import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function Protected(props) {
    const cmp = props.cmp;
    const status = useSelector(state => state.authSlice.status)
    return (
        <div> {status ? cmp : <Navigate to="/signin" />}{console.warn(status)}
        </div>
    )
}

export default Protected