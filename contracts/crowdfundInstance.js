/* eslint-disable */
import web3 from './web3';

// const address = '0x9fc1a2e85b3ae6b4b0a36146929f2c1a860689af';
const address = '0x14ce8979415b1b3117897d2a48c7c6b8bc16449b';

 const abi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "contractAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "projectStarter",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "projectTitle",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "projectDesc",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "goalAmount",
                    "type": "uint256"
                }
            ],
            "name": "ProjectStarted",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "durationInDays",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountToRaise",
                    "type": "uint256"
                }
            ],
            "name": "startProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "returnAllProjects",
            "outputs": [
                {
                    "internalType": "contract Project[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];

    const instance = new web3.eth.Contract(abi, address);

export default instance;

//     {
//         "anonymous": false,
//         "inputs": [
//             {
//                 "indexed": false,
//                 "name": "contractAddress",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "projectStarter",
//                 "type": "address"
//             },
//             {
//                 "indexed": false,
//                 "name": "projectTitle",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "name": "projectDesc",
//                 "type": "string"
//             },
//             {
//                 "indexed": false,
//                 "name": "deadline",
//                 "type": "uint256"
//             },
//             {
//                 "indexed": false,
//                 "name": "goalAmount",
//                 "type": "uint256"
//             }
//         ],
//         "name": "ProjectStarted",
//         "type": "event"
//     },
//     {
//         "constant": false,
//         "inputs": [
//             {
//                 "name": "title",
//                 "type": "string"
//             },
//             {
//                 "name": "description",
//                 "type": "string"
//             },
//             {
//                 "name": "durationInDays",
//                 "type": "uint256"
//             },
//             {
//                 "name": "amountToRaise",
//                 "type": "uint256"
//             }
//         ],
//         "name": "startProject",
//         "outputs": [],
//         "payable": false,
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "constant": true,
//         "inputs": [],
//         "name": "returnAllProjects",
//         "outputs": [
//             {
//                 "name": "",
//                 "type": "address[]"
//             }
//         ],
//         "payable": false,
//         "stateMutability": "view",
//         "type": "function"
//     }
// ];


