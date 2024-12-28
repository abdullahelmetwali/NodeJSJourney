/*
- Streams :
=> It's a way to handle reading or writing file to make the proccess more efficient , by dividing the file into small parts (chunks) and make a proccess for every chunk (part) 

(?) If we have a file 10GB , how can we handle it ?
(R) => Here we can use the streams way , by dividing the file into 10 parts (chunk) , every chunk is 1GB , and divide this 1GB into 10 chunks , every chunk is 100MB , so the handling of the file will be more efficient and faster.
*/
const fs = require('fs');


// createWriteStream(path , {options}) : This method is used to write a file in a stream way (in chunks), it's non-blocking code
const wStream = fs.createWriteStream('./outputFromStream.txt', 'utf-8');
// Now, I created a text in the file I created by stream
wStream.write(`Hi I'm the first line created by stream\n`);


// createReadStream(path , {options}) : This method is used to read a file in a stream way (in chunks), it's non-blocking code
const rStream = fs.createReadStream('./inputFromStream.txt', {
    encoding: 'utf-8',
    highWaterMark: 16 * 1024 // 16KB || The size of the chunk (part) , default is 64KB
});

// On every chunk of data , this event will be fired
rStream.on('data', (chunk) => {
    // console.log('======== chunk ========== ' + chunk);
    wStream.write(`I'm the chunk : ${chunk}\n`); // Now , for every stream it will created this text with the chunk next to it 
});

// On the end of the file (when finish reading), this event will be fired
rStream.on('end', () => {
    console.log('Finished reading the file');
});

// On any error , this event will be fired
rStream.on('error', (err) => {
    console.error(err);
});