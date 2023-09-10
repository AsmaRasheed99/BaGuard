const admin = require('firebase-admin');
const serviceAccount = require('../esp-test-a1589-firebase-adminsdk-ql8mc-033c1cd1fd.json'); // Replace with your service account key file path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://esp-test-a1589-default-rtdb.firebaseio.com', // Replace with your database URL
});

const db = admin.database();

// Reference to the root of your Firebase Realtime Database
const rootRef = db.ref();

// Access data under a specific node (e.g., "users")
const usersRef = rootRef.child('Device');


const getLocation = async (req , res) =>{
    const id = req.params.id;
    usersRef.once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data[id].locations);
      const filteredData = {};
   
      console.log('Retrieved data', filteredData);
    res.json(data[id].locations);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
  

}
const getData = async (req , res) =>{
    const id = req.params.id;
    usersRef.once('value')
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data[id]);
     
      res.json(data[id]);
    })
    .catch((error) => {
      console.error('Error retrieving data:', error);
    });
  

}

const ConnectDevice = async (req, res) => {
  const {Name , ticketId,deviceId} = req.body;
  
  const deviceSnapshot = await usersRef.child(deviceId).once('value');
  if (!deviceSnapshot.exists()) {
    return res.status(404).json({ message: "Device not found" });
  }

  // Update the device properties
  await usersRef.child(deviceId).update({
    Name,
    ticketId,
  });

  res.status(200).json({
    message: "Data updated successfully",
    deviceId: deviceId, // Return the ID of the edited device
  });

} 






  


module.exports = {
  getLocation,
  ConnectDevice,
  getData,
}