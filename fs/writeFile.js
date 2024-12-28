const fs = require('fs');

// This method is non-blocking code and its used to create (write) a file , means that the entire file or code willnot wait until this func finish its job (async)
fs.writeFile('./writeFileMethod.json', JSON.stringify({ id: 1, name: 'Abdullah' }), 'utf-8', (err, res) => {
    if (err) {
        console.log('ERROR IS : ' + err);
    } else {
        console.log('Data has been written successfully');
    }
});

// This method is blocking code and its used to create (write) a file , means that the entire file or code will wait until this func finish its job (sync)
fs.writeFileSync('./writeFileSyncMethod.json', JSON.stringify({ id: 2, name: 'Amr' }), 'utf-8');