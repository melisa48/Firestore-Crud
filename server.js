const express = require("express");
const app = express();

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
     credential: admin.credential.cert(credentials)
});

app.use(express.json ());

app.use(express.urlencoded({ extended: true }));

const db = admin.firestore();

app.post('/create', async (req, res) => {
     try{
          console.log(req.body);
          const id = req.body.email;
          const userJson = {
               email: req.body.email,
               fireName: req.body.fireName,
               lastName: req.body.lastName
          };
          const response = db.collection("users").add(userJson);
          res.send(response);
     } catch (error) {
          res.send(error);
     }
     }
)

app.get('/read/all', async (req, res) => {
     try {
          const usersRef = db.collection("users");
          const response = await usersRef.get();
          let responseArr = [];
          response.forEach(doc => {
               responseArr.push(doc.data());
          });
          res.send(responseArr);
     } catch(error) {
          res.send(error);
     }
});

app.get('/read/:id', async (req, res) => {
     try {
          const usersRef = db.collection("users").doc(req.params.id);
          const response = await usersRef.get();
          res.send(response.data());
     } catch(error) {
          res.send(error);
     }

})

app.post('/update', async (req, res) => {
     try {
          const id=req.body.email;
          const newFireName = "hello world!";
          const usersRef = await db.collection("users").doc(id)
          .update({
               fireName: newFireName
          })
          res.send(response);
     } catch(error) {
          res.send(error);
     }
     })

app.delete('/delete/:id', async (req, res) => {
     try {
          const response = await db.collection("users").doc(req.params.id).delete();
          res.send(response);
     } catch(error) {
          res.send(error);
     }
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
})

