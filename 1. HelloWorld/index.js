console.log("Hello, World!")
setTimeout(()=>{
  console.log("This is a delayed message.")   
},2000)
console.log("This is the end of the script.")
var app = require("express")();
const v8 = require('v8');

app.get("/", function (req, res) {  
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.send("your IP is: " + req.ip);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});



const heapStats = v8.getHeapStatistics();

console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');
