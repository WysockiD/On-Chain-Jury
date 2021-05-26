/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { useQuery, gql } from '@apollo/client';
import { Address } from "../components";
import 'graphiql/graphiql.min.css';
import { blueBright, color, green } from "ansi-styles";

  const highlight = { marginLeft: 4, marginRight: 8, /*backgroundColor: "#f9f9f9",*/ padding: 4, borderRadius: 4, fontWeight: "bolder" }

  export default function Subgraph({count, purpose, setGuilty, setPurposeEvents, FinalVerdict, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  

  const [newPurpose, setNewPurpose] = useState("loading...");

  return (
      <>

      <Divider></Divider>
   
          

          <div style={{ width:600, margin: "auto", marginTop:32, paddingBottom:32 }}>
        <h2>After thourough deliberation we the jury find the defendant:</h2>
        <List 
          bordered
          split
<<<<<<< HEAD:packages/react-app/src/views/Verdict.jsx
          size='large'
          pagination={{pageSize:1, size:'small'}}
=======
>>>>>>> 2cc2c11778fd06621a621d9dc90c87be4b0c20eb:packages/react-app/src/views/Subgraph.jsx
          
  
          dataSource={FinalVerdict}
          

          renderItem={item => {
            return (
<<<<<<< HEAD:packages/react-app/src/views/Verdict.jsx
              <List.Item style={{color:"darkgray"}} key={item.string+"_"}>
=======
              <List.Item  key={item.string+"_"}>
>>>>>>> 2cc2c11778fd06621a621d9dc90c87be4b0c20eb:packages/react-app/src/views/Subgraph.jsx
               
               {item[0]}
  
              </List.Item>
              

              
            );

          }}
          
        />

      </div>


         

          <div style={{width:780, margin: "auto", paddingBottom:64}}>

            <div style={{margin:32, textAlign:'middle'}}>
              
          
              <Button type='danger' block size={"large"} onClick={()=>{
                console.log("Final Verdict: ",newPurpose)
                /* look how you call setPurpose on your contract: */
                tx(writeContracts.YourContract.Verdict() )
              }}>Final Verdict</Button>
            </div>

            </div>
            <Divider></Divider>
            <div></div>
            <Divider></Divider>

            <div style={{margin:32, textAlign:'right'}}>

<<<<<<< HEAD:packages/react-app/src/views/Verdict.jsx
              <h3> If Hung Jury: </h3>
=======
              <h3> If Hung Jury, </h3>
>>>>>>> 2cc2c11778fd06621a621d9dc90c87be4b0c20eb:packages/react-app/src/views/Subgraph.jsx

            <Button type='dashed' size={"medium"} onClick={()=>{ 
                console.log("Final Verdict: ",newPurpose)
                /* look how you call setPurpose on your contract: */
                tx(writeContracts.YourContract.restore())
              }}>Redeliberate</Button>
              </div>

          

          <div style={{padding:2}}>
          
          </div>
          <Divider></Divider>
          <Divider></Divider>
      </>
  );

}


