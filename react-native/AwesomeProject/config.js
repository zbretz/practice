var ip = require("ip");
console.dir ( ip.address() );

// var os = require('react-native-os');
var os = require('os');

var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);

var address, ifaces = os.networkInterfaces();
for (var dev in ifaces) {
    ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address: undefined);
}

console.log(address);

// export default address

// import { NetworkInfo } from "react-native-network-info";

// // Get Local IP
// NetworkInfo.getIPAddress().then(ipAddress => {
//   console.log(ipAddress);
// });

// // Get IPv4 IP (priority: WiFi first, cellular second)
// NetworkInfo.getIPV4Address().then(ipv4Address => {
//   console.log(ipv4Address);
// });

// import publicIP from 'react-native-public-ip';

// publicIP()
// .then(ip => {
//   console.log(ip);
//   // '47.122.71.234'
// })
// .catch(error => {
//   console.log(error);
//   // 'Unable to get IP address.'
// });