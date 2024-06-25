const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save" , (req , res) => {
	const url = "mongodb+srv://sanskargawade85:YcK8UpORR1PyO7C4@cluster0.hkr1zrq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("ws25june24");
	const coll = db.collection("student");
	const records = {name : req.body.name , choice : req.body.choice };
	coll.insertOne(records)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});
app.listen(9000 , () => {console.log("Ready to serve@ 9000");});

