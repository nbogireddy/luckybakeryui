import React, { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRupeeSign } from "react-icons/fa";
import DataTable from './TableData';
// import { format } from 'date-fns'

const Category = () => {
    const style = { color: "black", fontSize: "1.5em" }
    const [filteredData, setFilteredData] = useState("");
    const [data] = useState([]);
    const [loading] = useState(false);
    // const [balance, setBalance] = useState("");

    // const fetchCategoryList = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(API_ENDPOINTS.getExpenseList);
    //         setData(response.data);
    //         const responseBal = await axios.get(API_ENDPOINTS.getAdvanceBalance);
    //         setBalance(responseBal.data);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching Expense List:', error);
    //     }
    // };
    // useEffect(() => {        
    //     fetchCategoryList();
    // }, []);

    const filteration = (filterData, value) => {
        const newarr = filterData.filter((item) => {
            if (!value) return true;
            if (
                item.transactionType.toLowerCase().includes(value.toLowerCase()) ||
                item.paymentMethod.toLowerCase().includes(value.toLowerCase()) || item.remainingAdvanceAmount.toString().includes(value) ||
                item.expenseCategory.name.toLowerCase().includes(value.toLowerCase()) || item.transactionAmount.toString().includes(value)
            ) {
                return true;
            }
            return false;
        });
        return newarr;
    }

    const columns = [
        {
            name: "Name",
            selector: (data) => data.name,
            sortable: true
        },
        
        {
            name: "Description",
            selector: (data) => data.description,
            sortable: false
        },
        {
            name: "Action",
            sortable: false,
            selector: (data) => data,
            style: 'justify-content: space-evenly',
            cell: (data) => (
              <>
                {/* <BiEdit className='editIconColor' onClick={() => editToStudent(data)} size="1.6em" />
                <RiDeleteBin6Line className='deleteIconColor' onClick={() => {
                  setStudentId(data.studentId); // Set the ID of the item to be deleted
                  setShowDeleteModal(true); // Show the delete confirmation modal
                }} size="1.6em" /> */}
              </>
            )
          }
        
    ];
    return (
        <>
            <Container className="pt-4 dynamicWidth">
                <Card>
                    <div className="card-header box-header">
                        <Row>
                            <Col md={5}>
                                <FaRupeeSign /> Category
                            </Col>
                            <Col md={5}>
                                
                            </Col>
                            <Col md={2}>
                                <Link to="/inventory/category/addCategory" style={{ color: "black" }}>
                                    <FaRupeeSign style={style} /> Add Category
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="card-body">
                        <Card>
                            <div className="card-header box-header">
                                All Category
                            </div>
                            <div className="card-body">
                                <div className='search'>
                                    <span className='searchLabel'>Search: </span>
                                    <input
                                        className='inputlabel'
                                        type="text"
                                        value={filteredData}
                                        onChange={(e) => setFilteredData(e.target.value)} />
                                </div>
                                {loading ? (
                                    <div className="loader"></div>
                                ) : <DataTable data={filteration(data, filteredData)} columns={columns} />}
                            </div>
                        </Card>
                    </div>
                </Card>
            </Container>
        </>
    );
};

  
  export default Category;