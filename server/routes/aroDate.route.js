/**
 *  bidDueDate.jse.js
 *
 *  Receives a get request at path /sopsTasks
 *
 *  Establishes connection to Salesforce using session cookie containing accessToken
 *
 *  Queries Salesforce for a list of Quote Review Tasks assigned to the logged on user
 *
 *  Results are stored in cache-provider with 'sopsTasksKey'
 *
 */


const jsforce = require('jsforce');
const express = require('express');
const aroDateRoute = express.Router();


aroDateRoute.route('/').get((req, res) => {
  if (req.session.userId ) {

    const connection = new jsforce.Connection({
      sessionId: req.session.accessToken,
      instanceUrl: req.session.instanceUrl
    });
    connection.query(
      'SELECT Id, ARO_Date__c, Name FROM Opportunity WHERE SOPS_Control__c = True ' +
      'AND Primary_Quote_Status__c <> \'\' AND (StageName = \'Solution Design\' ' + '' +
      'OR StageName = \'Customer Evaluation\') ORDER BY Name',
      (err, result) => {
        if (err)
          return console.error(err);
        else {
          res.json(result.records);
        }

      });
  }
  else
    res.status(400).send('Error: Not Logged in');
});

module.exports = aroDateRoute;
