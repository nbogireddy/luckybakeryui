import React, { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as IoIcons from "react-icons/pi";
import '../components/Table.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { API_ENDPOINTS } from '../BaseEndpoint';
import { MdClose } from "react-icons/md";
const AddCategory = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        Name: '',
        Description: ''
    });
    const [submitDisable] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit =  (e) => {
    }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(API_ENDPOINTS.addFeeType, formData);
    //         if (response.status === 200) {
    //             setSubmitDisable(true);
    //             toast.success("Category Saved successfully!", {
    //                 position: "top-right", autoClose: 2000, style: {
    //                     backgroundColor: 'green', // Set the background color
    //                     color: 'white' // Set the text color                        
    //                 },
    //                 onClose: () => {
    //                     navigate('/inventory/category'); // Navigate to '/FeeType' after toast is closed
    //                 }
    //             });
    //         } else {
    //             toast.error('Category Not Saved', {
    //                 position: "top-right", autoClose: 2000, style: {
    //                     backgroundColor: 'red', // Set the background color
    //                     color: 'white' // Set the text color  
    //                 }
    //             });
    //         }
    //     } catch (error) {
    //         toast.error('Category Error ..!', {
    //             position: "top-right", autoClose: 2000, style: {
    //                 backgroundColor: 'red', // Set the background color
    //                 color: 'white' // Set the text color  
    //             }
    //         });
    //     }

    //     console.log('Form data:', formData);
    // };

    const onHandled = () => {
        navigate('/inventory/category')
    }
    return (
        <>
            <Container className="pt-4 dynamicWidth">
                <Card>
                    <div className="card-header box-header">
                        <IoIcons.PiStudent /> Add Category
                        <MdClose className='float-end' onClick={onHandled} />
                    </div>
                    <div className="card-body">
                        {/* <ToastContainer /> */}
                        <form className="form-horizontal" onSubmit={handleSubmit} method="post" encType="multipart/form-data">

                            <Row>
                                <Col xs={12}>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-sm-3 control-label">
                                            Name <span className="text-red">*</span>
                                        </label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="name" name="name" onChange={handleChange} value={formData.name} required />
                                        </div>
                                    </div>

                                    <div className="form-group row pt-1">
                                        <label htmlFor="description" className="col-sm-3 control-label">
                                            Description <span className="text-red">*</span>
                                        </label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" id="description" name="description" onChange={handleChange} value={formData.description} required />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-offset-2 col-sm-8">
                                            <input type="submit" className="btn btn-success" value="Add Category" disabled={submitDisable} />
                                        </div>
                                    </div>
                                </Col>

                            </Row>

                        </form>
                    </div>
                </Card>
            </Container>
        </>
    );
}

export default AddCategory;
