import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
//import  {SimpleTreeView}  from '@mui/x-tree-view/SimpleTreeView';
import { TreeView, SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMore from '@mui/icons-material/ExpandMore'; // Correct import path for ExpandMore
import { ChevronRight, NoEncryption } from '@mui/icons-material';
import Login from './Login';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

// const ShowTreeComponent = (props) => {
//     debugger;
//     const { childern, activeTree, selectedTree } = props;
//     return (
//         <div hidden={activeTree !== selectedTree}>
//             {activeTree === selectedTree && <Box mx={2}>{childern}</Box>}
//         </div>
//     );
// }

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

const TreeViewMUI = () => {
    const treeHeading = ["Slider", "Portal", "Stepper", "Modal"];
    const treeSubHeading = ["Slider one", "Portal one", "Stepper one", "Model one"];
    const [activeTree, setActiveTree] = useState();
    const handleClick = (node) => {
        setActiveTree(node);
        console.log(node);
        //alert(node);
    }
  
    return (
        <Box>
            <Typography variant='h5' color="secondary" align="center">
                MUI TreeViewMUI
            </Typography>
            <Stack spacing={3} direction="row">
                <Box width="20%">
                    <SimpleTreeView>
                        {

                            treeHeading.map((treeItem, index) => (
                                <TreeItem itemId={index} label={treeItem}>
                                    <TreeItem itemId={treeSubHeading[index]} label={treeSubHeading[index]} 
                                    onClick={() => handleClick(treeSubHeading[index])} />
                                </TreeItem>

                            ))

                        }
                    </SimpleTreeView>
                </Box>
                <Box width="80%">
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Slider One">
                        {/* <Login></Login> */}
                    </ShowTreeComponent>
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Portal one">
                        <CardHeader/>
                    </ShowTreeComponent>
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Stepper one">
                        <CardFooter/>
                    </ShowTreeComponent>
                    <ShowTreeComponent activeTree={activeTree} selectedTree="Model One">

                    </ShowTreeComponent>
                </Box>
            </Stack>
        </Box>
    );
}
export default TreeViewMUI;
