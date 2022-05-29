import React from "react";
import SqlArea from './SqlArea';
import { Container, Dropdown } from "react-bootstrap";

function DropdownBar() {
    const [pageNum, setPageNum] = React.useState(1);
    function changeTab(number) {
        setPageNum(number);
    }
    const [item, setItem] = React.useState([])
    function addTab() {
        setItem((arr) => [...arr, true])
    }
    return(
        <Container>
            <Dropdown style={{padding : "10px"} }>
                <Dropdown.Toggle variant="secondary">Query {pageNum}</Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#" onClick={() => changeTab(1)}>Query 1</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => changeTab(2)}>Query 2</Dropdown.Item>
                <Dropdown.Item href="#" onClick={() => changeTab(3)}>Query 3</Dropdown.Item>
                { item.map((tab, i) => ( <Dropdown.Item key={i} href="#" onClick={() => changeTab(i + 4)}>Query {i + 4}</Dropdown.Item> )) }
                <Dropdown.Divider />
                <Dropdown.Item href="#" onClick= {() => addTab()}>Add New Query</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <SqlArea number={pageNum} show={false}/>
        </Container>
    );
}

export default DropdownBar;