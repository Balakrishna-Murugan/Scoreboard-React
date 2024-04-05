import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
//import  {SimpleTreeView}  from '@mui/x-tree-view/SimpleTreeView';
import { TreeView, SimpleTreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMore from '@mui/icons-material/ExpandMore'; // Correct import path for ExpandMore
import { ChevronRight, NoEncryption } from '@mui/icons-material';
import Login from './Login';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';






const TreeViewComponent = ({ treeJsonData,handleClick }) => {
    return (
        <>
            {treeJsonData.map(rootNode => (
                <TreeNodeComponent itemId={rootNode.id} handleClick={handleClick} treeNode={rootNode} label={rootNode.name} onClick={() => handleClick(rootNode)}></TreeNodeComponent>
            ))}
        </>
    );
};

const TreeNodeComponent = ({ treeNode,handleClick }) => {
   
    const hasChildren = treeNode.children && treeNode.children
    return (
        <>
            <TreeItem itemId={treeNode.id} label={treeNode.name} onClick={() => handleClick(treeNode)}>
                {hasChildren && treeNode.children.map(child => (
                    <TreeItem itemId={child.id} label={child.name} onClick={() => handleClick(child)}>
                        {child.Grandchildren && child.Grandchildren.map(Grandchildren=>(
                            <TreeItem itemId={Grandchildren.id} label={Grandchildren.name} onClick={() => handleClick(Grandchildren)}>
                                </TreeItem>
                        ))}
                    </TreeItem>
                ))}
            </TreeItem>

        </>
    );
};

const TreeViewMUI = ({sendDataToParent}) => {
    const treeData = [
        {
            id: 1,
            name: 'TNCC',
            children: [
                {
                    id: 2, name: 'Player 1',
                    Grandchildren: [
                        { id: 3, name: 'Bowling' },
                        { id: 4, name: 'Batting' }
                    ]
                },
                { id: 5, name: 'Player 2' }
            ]
        },
        {
            id: 6,
            name: 'Demo Team',
            children: [
                {
                    id: 7, name: 'Player 1',
                    Grandchildren: [
                        { id: 8, name: 'Bowling' },
                        { id: 9, name: 'Batting' }
                    ]
                },
                {
                    id: 10, name: 'Player 2',
                    Grandchildren: [
                        { id: 11, name: 'Bowling' },
                        { id: 12, name: 'Batting' }
                    ]
                },
                {
                    id: 13, name: 'Player 3',
                    Grandchildren: [
                        { id: 14, name: 'Bowling' },
                        { id: 15, name: 'Batting' }
                    ]
                },
                {
                    id: 16, name: 'Player 4',
                    Grandchildren: [
                        { id: 17, name: 'Bowling' },
                        { id: 18, name: 'Batting' }
                    ]
                },
                {
                    id: 19, name: 'Player 4',
                    Grandchildren: [
                        { id: 20, name: 'Bowling' },
                        { id: 21, name: 'Batting' }
                    ]
                }
            ]
        }
    ];
    const treeHeading = ["Slider", "Portal", "Stepper", "Modal"];
    const treeSubHeading = ["Slider one", "Portal one", "Stepper one", "Model one"];
    const [activeTree, setActiveTree] = useState();
    const handleClick = (node) => {
        setActiveTree(node);
        console.log(node);
        sendDataToParent(node);
        //alert(node);
    }

    return (
        <Box>
            <Typography variant='h5' color="secondary" align="center">
                MUI TreeViewMUI
            </Typography>
            <Stack spacing={3} direction="row">
                <Box width="100%">
                    <SimpleTreeView>
                        {

                            <TreeViewComponent treeJsonData={treeData} handleClick={handleClick}></TreeViewComponent>
                            // treeHeading.map((treeItem, index) => (
                            //     <TreeItem itemId={index} label={treeItem}>
                            //         <TreeItem itemId={treeSubHeading[index]} label={treeSubHeading[index]} 
                            //         onClick={() => handleClick(treeSubHeading[index])} />
                            //     </TreeItem>

                            // ))

                        }
                    </SimpleTreeView>
                </Box>
               
            </Stack>
        </Box>
    );
}
export default TreeViewMUI;
