# checkout

_A project of a checkout page. Implemented with Angular 13 with a small node server_
 

### This project contains both Server and Client.
Open 2 terminals

###### Server Terminal:
checkout/server ---> `npm run start`.
 Server runs on port 3003

###### Client Terminal:
checkout/client/checkout  ---> `npm start`.
 Client runs on port 4200 (localhost:4200)


#### Remarks:
* Tried to get as close to the design as possible. Could have been more accurate if I got a figma or a design doc.
* Had some limitations with the JSON file which makes the current implementation not bulletproof to various future options of refunds. (somethings we could have resolved in a real life situation by a short discussion)
* Decided not to implement a 'Thank you page' once a refund is submitted. I believe that as part of a bigger system, the user would be redirected back to the page he came from.
* In case the user submits a selected refund, it is printed in the 'server' console.


Thanks :)
