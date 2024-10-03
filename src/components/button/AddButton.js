import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {FaUser} from "react-icons/fa";

const AddButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    }

    return (
        <Button variant="success" onClick={handleClick}>
            <FaUser /> Add User
        </Button>
    );
}

export default AddButton;