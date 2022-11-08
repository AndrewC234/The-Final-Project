const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/member").get(function (req, res) {
 let db_connect = dbo.getDb("Member");
 db_connect
   .collection("Member")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you get a single record by id
recordRoutes.route("/member/:id").get(function (req, res) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect
   .collection("Members")
   .findOne(myquery, function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});
 
// This section will help you create a new record.
recordRoutes.route("/Member/add").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myobj = {
   firstName: req.body.FirstName,
   LastName: req.body.LastName,
   DOB: req.body.DOB,
   Address: req.body.Address,
   Email: req.body.Email,
   Password: req.body.Password,
   CardName: req.body.CardName,
   CVV: req.body.CVV,
   CardNumber: req.body.CardNumber,
   Date: req.body.date,
   Membership: req.body.Membership
 };
 db_connect.collection("Member").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
 });
});
 
// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 let newvalues = {
   $set: {
    firstName: req.body.FirstName,
    LastName: req.body.LastName,
    DOB: req.body.DOB,
    Address: req.body.Address,
    Email: req.body.Email,
    Password: req.body.Password,
    CardName: req.body.CardName,
    CVV: req.body.CVV,
    CardNumber: req.body.CardNumber,
    Date: req.body.date,
    Membership: req.body.Membership
   },
 };
 db_connect
   .collection("Member")
   .updateOne(myquery, newvalues, function (err, res) {
     if (err) throw err;
     console.log("1 document updated");
     response.json(res);
   });
});
 
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
 let db_connect = dbo.getDb();
 let myquery = { _id: ObjectId(req.params.id) };
 db_connect.collection("Member").deleteOne(myquery, function (err, obj) {
   if (err) throw err;
   console.log("1 document deleted");
   response.json(obj);
 });
});
 
module.exports = MembersRoutes;