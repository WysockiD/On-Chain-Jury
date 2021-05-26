module.exports = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "FinalVerdict",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "id",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "count",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "voted",
        "type": "bool"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "verdict",
        "type": "string"
      }
    ],
    "name": "register",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "setguilty",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "who",
        "type": "address"
      }
    ],
    "name": "setGuilty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "setnotguilty",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "who",
        "type": "address"
      }
    ],
    "name": "setNotGuilty",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "name": "Finish",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "name": "Guilty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "name": "NotGuilty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "juryMember",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "FullName",
        "type": "string"
      }
    ],
    "name": "Register",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Verdict",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "guiltyCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "inProgress",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "juror",
    "outputs": [
      {
        "internalType": "string",
        "name": "ID",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "voted",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "verdict",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "weight",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "registered",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "juryCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "notGuiltyCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "restore",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];