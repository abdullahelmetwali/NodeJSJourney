const fs = require('fs');

// readFileSync(filePath , options) : This method is blocking code , means that the entire file or code will wait until this func finish its job (sync)
const content = fs.readFileSync('./readFileMethod.txt', 'utf-8');
console.log(content);

// readFile(filePath , options , callback) : This method is non-blocking code , means that the entire file or code will not wait until this func finish its job (async)
fs.readFile('./readFileMethod.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Made by async func : ' + data);
});