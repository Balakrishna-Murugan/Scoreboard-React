import React from 'react';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import './UserTree.css'; // Import your custom CSS file for Bootstrap styles

// const TreeNode = ({ node, onNodeClick }) => (
//     <div className="tree-node">
//       <TreeView
//         key={node.id}
//         nodeLabel={<span className="node-label" onClick={() => onNodeClick(node)}>{node.name}</span>}
//         defaultCollapsed={true} // You can set this to false if you want the nodes to be expanded by default
//         // onClick={() => onNodeClick(node)} // Call the onClick event handler when a node is clicked
//       >
//         {node.children && node.children.map(child => (
//           <TreeNode key={child.id} node={child} onNodeClick={onNodeClick} />
//         ))}
//       </TreeView>
//     </div>
//   );

function TreeNode({ node, onNodeClick }) {
    return (
        <div className="tree-node">
            <TreeView className="node-label"
                key={node.id}
                nodeLabel={<span className="node-label" onClick={() => onNodeClick(node)}>{node.name}</span>}
                defaultCollapsed={true} // You can set this to false if you want the nodes to be expanded by default
            // onClick={() => onNodeClick(node)} // Call the onClick event handler when a node is clicked
            >
               {node.children && node.children.map(child => (
                    <TreeNode key={child.id} node={child} onNodeClick={onNodeClick} />
                ))}
                {node.Grandchildren && node.Grandchildren.map(grandChild => (
                    <TreeNode key={grandChild.id} node={grandChild} onNodeClick={onNodeClick} />
                ))}
            </TreeView>
        </div>
    )
}



const MyTreeView = ({ data, onNodeClick }) => (
    <div className="my-tree-view">
        {data.map(node => (
            <TreeNode  key={node.id} node={node} onNodeClick={onNodeClick} />
        ))}
    </div>
);

// Example usage:
const treeData = [
    {
        id: 1,
        name: 'TNCC',
        children: [
            { id: 2, name: 'Player 1', 
            Grandchildren: [
                { id: 4, name: 'Bowling' },
                { id: 5, name: 'Batting' }
            ]},
            { id: 3, name: 'Player 2' }
        ]
    },
    {
        id: 4,
        name: 'Demo Team',
        children: [
            { id: 5, name: 'Player 1',
            Grandchildren: [
                { id: 1, name: 'Bowling' },
                { id: 2, name: 'Batting' }
            ]},
            { id: 6, name: 'Player 2',
            Grandchildren: [
                { id: 1, name: 'Bowling' },
                { id: 2, name: 'Batting' }
            ]},
            { id: 7, name: 'Player 3',
            Grandchildren: [
                { id: 1, name: 'Bowling' },
                { id: 2, name: 'Batting' }
            ]},
            { id: 8, name: 'Player 4',
            Grandchildren: [
                { id: 1, name: 'Bowling' },
                { id: 2, name: 'Batting' }
            ]},
             { id: 8, name: 'Player 4',
            Grandchildren: [
                { id: 1, name: 'Bowling' },
                { id: 2, name: 'Batting' }
            ]}
        ]
    }
];

const handleNodeClick = (node) => {
    console.log('Node clicked:', node);
};

const UserTree = () => (
    <div>
        <h1>Team Info</h1>
        <MyTreeView  data={treeData} onNodeClick={handleNodeClick} />
    </div>
);

export default UserTree;
