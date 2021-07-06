const os = require('os')

//info sbout current user
const user = os.userInfo()
console.log(user);

// method returns the system uptime in sec
console.log(`The system uptime is : ${os.uptime} seconds`);

// Os info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);