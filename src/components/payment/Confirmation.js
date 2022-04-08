import React from "react";
import { useParams } from "react-router-dom";

const Confirmation = (props) => {
    const {user} = props
    const userId = useParams()
    return (
        <p>{userId}</p>
    )
}

export default Confirmation