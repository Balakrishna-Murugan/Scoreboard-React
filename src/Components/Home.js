import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from './CardHeader';
import { useNavigate } from "react-router-dom";
import CardFooter from './CardFooter';
import { Box, Stack, Typography } from '@mui/material';
import '../App.css';
import UserTree from './UserTree';
import UserTreeMUI from './TreeViewMUI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ShowTreeComponent = (props) => {
    debugger;
    const { children, activeTree, selectedTree } = props;
    console.log("Active Tree:", activeTree);
    console.log("Selected Tree:", selectedTree);
    return (
        <div hidden={activeTree !== selectedTree}>
            {activeTree === selectedTree ? (
                <Box mx={2}>
                    <Typography variant="h6">Active Tree: {activeTree}</Typography>
                    {children}
                </Box>
            ) : null}
        </div>
    );
}
function Home() {
    const [activeTree, setActiveTree] = useState();
    const history = useNavigate();
    const [dataFromChild, setDataFromChild] = useState(null);
    //Callback function to receive data from child
    const hanleDataFromChild = (data) => {
        debugger;
        setDataFromChild(data.name);
        setActiveTree(data.name);
    }

    return (
        <>
            <div className="flex-container">
                <div className="grid-item">
                    <CardHeader isHome={true}></CardHeader>
                </div>
            </div>
            <div className="flex-container">
                <div className="grid-item">
                    <UserTreeMUI sendDataToParent={hanleDataFromChild} />
                </div>
            </div>
            <div className="flex-container">
                <div className="grid-item">
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Bowling">
                        {<CardFooter></CardFooter>}
                    </ShowTreeComponent>
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Batting">
                        <CardHeader />
                    </ShowTreeComponent>

                </div>
            </div>
        </>
    );
}
export default Home;

