/* eslint-disable jsx-a11y/accessible-emoji */

import React, { useState } from "react";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, Balance } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { padding } from "aes-js";
import { grey } from "ansi-colors";
import { green } from "ansi-styles";

export default function ExampleUI({count, purpose, setGuilty, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts }) {

  const [newPurpose, setNewPurpose] = useState("loading...");
  const [newPurpose2, setNewPurpose2] = useState("loading...");

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{border:"3px solid #cccccc", padding:16, width:400, margin:"auto",marginTop:64}}>
        <h2>⚖️ Jury Contract ⚖️</h2>
        <Divider/>
        <Divider/>

        <h4> Register yourself with your Ethereum address and full name below. 
          </h4> <h4>Next proceed to the deliberation room to deliberate, then return here to make your judgement. 
             Remember that all transactions that are recorded on the blockchain are immutable and can not be undone.</h4>

        <Divider/>

        <div style={{margin:8}}>
          <Input onChange={(e)=>{setNewPurpose(e.target.value)}} placeholder="Address"/>
          <div style={{margin:8}}/>
          <Input onChange={(e)=>{setNewPurpose2(e.target.value)}} placeholder="Full Name"/>
          <div style={{margin:8}}/>
          <Button 
        
          
              
              onClick={()=>{        
            console.log("newJurorAddress",newPurpose)
            console.log("newJurorName",newPurpose2)
            /* look how you call setPurpose on your contract: */
            tx( writeContracts.YourContract.Register(newPurpose, newPurpose2) )
          }}>Register</Button>
        </div>


        <Divider />
        <h4>

        🔹 Cast Your Judgement Onto The Blockchain: 🔹

        </h4>
        <Button 
        size="large"
        style={{margin:8}}
              
              onClick={()=>{        
            console.log("newPurpose",newPurpose)
            /* look how you call setPurpose on your contract: */
            tx( writeContracts.YourContract.Guilty(true) )
          }}>Guilty</Button>


        <Button 
        size="large"
        
        
              
              onClick={()=>{        
            console.log("newPurpose",newPurpose)
            /* look how you call setPurpose on your contract: */
            tx( writeContracts.YourContract.NotGuilty(true) )
          }}>Not Guilty</Button>

        <Divider />


        <Button 
              
              
              
              size="large" block
              onClick={()=>{        
            console.log("newPurpose",newPurpose)
            /* look how you call setPurpose on your contract: */
            tx( writeContracts.YourContract.Finish(true) )
          }}>Finalize</Button>

        <Divider />

        Your Address:
        <Address
            address={address}
            ensProvider={mainnetProvider}
            fontSize={16}
        />

        <Divider />
        
        Trial Contract Address:
        <Address
            address={readContracts?readContracts.YourContract.address:readContracts}
            ensProvider={mainnetProvider}
            fontSize={16}
        />


        <Divider />

        {  /* use formatEther to display a BigNumber: */ }
        <h2>Your Balance: {yourLocalBalance?formatEther(yourLocalBalance):"..."} ETH </h2>

        <div>OR</div>

        <Balance
          address={address}
          provider={localProvider}
          price={price}
        />


        



      </div>

      {/*
        📑 Maybe display a list of events?
          (uncomment the event and emit line in YourContract.sol! )
      */}
      <div style={{ width:600, margin: "auto", marginTop:32, paddingBottom:32 }}>
        <h2>Events:</h2>
        <List
          bordered
          pagination
          dataSource={setPurposeEvents}

          renderItem={item => {
            return (
              <List.Item key={item.time+"_"+item.id+"_"+item.addr+"_"+item.count+"_"+item.verdict+"_"+item.setnotguilty+"_"+item.setguilty+"_"}>
               
               <font color='grey' fontSize={25}>Juror Address: </font><Address
                    address={item[2]}
                    ensProvider={mainnetProvider}
                    fontSize={16}
                    font={green}
                  /> <font color='grey'>Full Name: </font> 
                {item[1]}
                
              <div></div>
                <font color='grey'>Decision:</font> 
                
                <font color=''> {item[5]} </font>
                
              </List.Item>
              

              
            );
          }}
        />
      </div>

      <div style={{ paddingBottom: 90}}/>
      
      
    </div>
    
  );
}
