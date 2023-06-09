import Box from '@mui/material/Box';
import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background
} from 'reactflow';
import 'reactflow/dist/style.css';

import {ListNode,InputNode} from "./Nodes"
/// nodes are hear you can use Memo ,don't rereander this line below
const nodeTypes = { listNode: ListNode ,inputNode:InputNode};

let id = 0;
const getId = () => `dragablenode_${id++}`;



function Editor() {
    /// reactflow setup
    const reactFlowWrapper = useRef(null)
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    
    const initialNodes = [ { id: '1', position: { x: 0, y: 0 },type:"inputNode", data: { label: '1' } },];
    const initialEdges = [];
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
    
    //  dataTransfer dropEffect
    
    const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    }, []);
    
    
    // app dnd drop event
    
    const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance,setNodes]
  );
  
  
    
  
    return (
    <Box sx={{
        height:"100%",
        backgroundImage:"linear-gradient(rgba(255,255,255,0.07),rgba(255,255,255,0.04))",
        borderRadius:'20px',
        width:'75%'// sidebar will take 30%
    }}>
    <ReactFlowProvider>
    <div ref={reactFlowWrapper} style={{
        height:'100%',
        width:"100%"
    }}>
        <ReactFlow
        nodes={nodes} 
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        onInit={setReactFlowInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        className={
        /// on android device
            navigator.userAgent.indexOf("Android")!==-1?
            "touchdevice-flow"
            :""
        }
        >
            <Background/>
            <Controls/>
        </ReactFlow>
    </div>
    </ReactFlowProvider>
    </Box>
    )
}

export default Editor;