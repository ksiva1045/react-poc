const express = require('express');
const cors = require('cors');
const app = express();

const port = 4000;

const servernames = {

	servers: [
		{
		name: "Linux-Server"
		},
		{
		name: "Unix-Server"
		},
		{
		name: "Windows-Server"
		}
	]
}


const osservers = {
  servers: [
    {
      name: "prdlx633",
      env: "Production"
    },
    {
      name: "devlx12972",
      env: "Development"
    },
    {
      name: "vrflx304",
      env: "QA"
    }
  ]
}


const bsresponse = {
    servers: [
        {
            "businessServices": [
                {
                    "itCIContacts": "Amruta Kumar Dangua, Anil Kumar Katam, Devi Priyanka Sundarapalli, Jagadeesh Besthavemula, Lakshmi Kalyani Surapaneni, Narasimhareddy Chennareddy, Sulaiman Mohammed, Venkateswara Reddy Nalagatla",
                    "name": "CSD Corporate Chargeback Data Load to ODS DEV",
                    "ownedBy": "Yusuf Bepari"
                },
                {
                    "itCIContacts": "",
                    "name": "NBS Staging Database DEV",
                    "ownedBy": "Sandra Page"
                }
            ],
            "name": "devai050"
        },
        {
            "businessServices": [
                {
                    "itCIContacts": "",
                    "name": "Life In-Force Illustration Router QA",
                    "ownedBy": "Ryan Dalessio"
                },
                {
                    "itCIContacts": "Harikrishna Atmakuri, Lina Guzman-Edwards, Navid Basha A, Ravi Aritakula",
                    "name": "FPAS (Financial Planning Administration System) QA",
                    "ownedBy": "Asjad Chaudhary"
                }
            ],
            "name": "vrfai751"
        }
    ]
	
}	
	
const create_ticket_response = {
  "id": 3,
  "createdDate": "2023-12-27T21:01:28.4875947",
  "eventDescription": "Hi  testing",
  "status": "OPENED",
  "subTicketDetails": [
    {
      "id": 11,
      "status": "OPENED",
      "serverDetails": {
        "id": 2,
        "name": "devlx12972",
        "typeOfServer": "Linux Server",
        "ciOwnerGroup": "New Business and Payment Services Support",
        "ownedBy": "Sandra Page",
        "supportGroup": "Unix Engineering",
        "environment": "Development",
      },
      "businessServiceDetails": {
        "id": 8,
        "name": "Client Medical Interview (CMI) DEV",
        "ownedBy": "Sandra Page",
        "ownerGroup": "Algo Team",
        "supportGroup": "Algo Team",
        "serviceType": "Usage::Usage",
        "itCIContacts": "Sandra Page",
        "environment": "Development"
      },
      "createdDate": "2023-12-27T21:01:28.8008815"
    },
    {
      "id": 12,
      "status": "OPENED",
      "serverDetails": {
        "id": 1,
        "name": "prdlx633",
        "typeOfServer": "Linux Server",
        "ciOwnerGroup": "IAM Plan and Build",
        "ownedBy": "Jacqueline Grochowalski",
        "supportGroup": "Unix Engineering",
        "environment": "Production",
      },
      "businessServiceDetails": {
        "id": 5,
        "name": "Acceptto credential provider",
        "ownedBy": "Jacqueline Grochowalski",
        "ownerGroup": "IAM Plan and Build",
        "supportGroup": "IAM Plan and Build",
        "serviceType": "Containment ::Containment",
        "itCIContacts": "Adam Bergstrom, Balamurugan Thirunavukarasu, James Wierzba",
        "environment": "Production"
      },
      "createdDate": "2023-12-27T21:01:28.7877568"
    },
    {
      "id": 13,
      "status": "OPENED",
      "serverDetails": {
        "id": 2,
        "name": "devlx12972",
        "typeOfServer": "Linux Server",
        "ciOwnerGroup": "New Business and Payment Services Support",
        "ownedBy": "Sandra Page",
        "supportGroup": "Unix Engineering",
        "environment": "Development"
      },
      "businessServiceDetails": {
        "id": 9,
        "name": "New Business Requirements Automation DEV",
        "ownedBy": "Sandra Page",
        "ownerGroup": "Algo Team",
        "supportGroup": "IAM Plan and Build",
        "serviceType": "Usage::Usage",
        "itCIContacts": "Ruth Meyer, Tatyana Gut",
        "environment": "Development"
      },
      "createdDate": "2023-12-27T21:01:28.8008815"
    },
    {
      "id": 14,
      "status": "OPENED",
      "serverDetails": {
        "id": 2,
        "name": "devlx12972",
        "typeOfServer": "Linux Server",
        "ciOwnerGroup": "New Business and Payment Services Support",
        "ownedBy": "Sandra Page",
        "supportGroup": "Unix Engineering",
        "environment": "Development",
      },
      "businessServiceDetails": {
        "id": 7,
        "name": "AURA Rules Engine (Service - Domain and BRMS) DEV",
        "ownedBy": "Sandra Page",
        "ownerGroup": "New Business and Payment Services Support",
        "supportGroup": "New Business Prod Support",
        "serviceType": "Usage::Usage",
        "itCIContacts": "Toni Brady",
        "environment": "Development"
      },
      "createdDate": "2023-12-27T21:01:28.8008815"
    },
    {
      "id": 15,
      "status": "OPENED",
      "serverDetails": {
        "id": 2,
        "name": "devlx12972",
        "typeOfServer": "Linux Server",
        "ciOwnerGroup": "New Business and Payment Services Support",
        "ownedBy": "Sandra Page",
        "supportGroup": "Unix Engineering",
        "environment": "Development",
      },
      "businessServiceDetails": {
        "id": 6,
        "name": "Algorithmic Underwriting (Aura) DEV",
        "ownedBy": "Sandra Page",
        "ownerGroup": "New Business and Payment Services Support",
        "supportGroup": "New Business Prod Support",
        "serviceType": "Usage::Usage",
        "itCIContacts": "Sandra Page",
        "environment": "Development"
      },
      "createdDate": "2023-12-27T21:01:28.8008815"
    }
  ]
}


app.use(cors());
app.use(express.json());


app.get('/api/server/all/os', (req,res) => {
	console.log(`server names ${servernames}`);
	res.json(servernames);
});

app.get('/api/server/all/Linux-Server', (req, res) => {
	console.log(osservers);
	res.json(osservers)
});

app.get('/api/options', (req,res) => {
	const dropdownOptions = ['option1','option2','option3','option4','option5'];
	res.json(dropdownOptions);
});

app.post('/server/register', (req,res) => {
	const response = {token:"test token"}
  console.log("register api")
	res.json(response);
});

app.post('/server/login', (req,res) => {
	const response = {token:"test token"}
  console.log("login api")
	res.json(response);
});
app.get('/server/all/os', (req, res) => {
	res.json(osservers);
});


app.post('/server/bs/all', (req, res) => {
		const request = req.body;
		res.json(bsresponse)
});

app.get('/server/ticket_details', (req, res) => {
  const request = req.body;
  res.json(create_ticket_response)
});
app.post('/server/ticket/create', (req, res) => {
  const request = req.body;
 
  res.json(create_ticket_response)
});

app.listen(port, () => {
	console.log(`server is running at http://localhost:${port}`);
});

