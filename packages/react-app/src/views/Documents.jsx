
import React, { useState } from "react";
import { formatEther } from "@ethersproject/units";
import { Address, AddressInput } from "../components";
import { Image, Select, Upload, Button, message, Divider } from "antd";
import { useTokenList } from "../hooks";
import { UploadOutlined, InboxOutlined, LeftOutlined } from '@ant-design/icons';
import Dragger from "antd/lib/upload/Dragger";
import { blueBright, color, green } from "ansi-styles";
const { Option } = Select;

export default function Hints({yourLocalBalance, mainnetProvider, price, address }) {

  // Get a list of tokens from a tokenlist -> see tokenlists.org!
  const [selectedToken, setSelectedToken] = useState("Pick a token!");
  let listOfTokens = useTokenList("https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json")


const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'Document1.pdf',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://www.nytimes.com/packages/pdf/national/13inmate_ProjectMKULTRA.pdf',
    },
    {
      uid: '2',
      name: 'File1.png',
      status: 'done',
      url: 'https://www.cia.gov/readingroom/docs/cia-RDP90-00845R000100310001-2.pdf',
    },
    {
      uid: '3',
      name: 'Image1.jpg',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'data:image/jpeg;base64,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',
    },
    {
      uid: '4',
      name: 'Document2.pdf',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://nsarchive2.gwu.edu/news/20010430/northwoods.pdf',
    },
    {
      uid: '5',
      name: 'File2.png',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://www.cia.gov/static/943643120807dda05c37d73ba0565ea9/Review-Operation-Paperclip.pdf',
    },
    {
      uid: '6',
      name: 'Image2.jpg',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://www.jewishvirtuallibrary.org/jsource/images/ww2/ProjectPaperclip.jpg',
    },
    {
      uid: '7',
      name: 'Document3.pdf',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://www.nsa.gov/Portals/70/documents/news-features/declassified-documents/jfk/jfk00020.pdf',
    },
    {
      uid: '8',
      name: 'Document4.pdf',
      status: 'done',
      response: 'Server Error 500', // custom error message to show
      url: 'https://www.cia.gov/readingroom/docs/CIA-RDP96-00788R001700210016-5.pdf',
    },
  ],
};
return (
  <div style={{marginTop: 55}}>

    <h1>???? Case Documents and Evidence ????</h1>
    <Divider></Divider>
    <div style={{textAlign:"left", border:"1px dashed #cccccc", padding:16, width:550, margin:"auto",marginTop:25}}>
      
    <Upload  {...props}>
    
  </Upload> <div style={{marginTop: 10}}></div>
  <Button style={{marginLeft: 420}} icon={<UploadOutlined />}>Upload</Button>
  </div> <Divider></Divider>
  </div>
     

  
);





  
  

        
      



}
