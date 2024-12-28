const fs = require('fs');

// This method is non-blocking code and its used to delete a file , means that the entire file or code willnot wait until this func finish its job (async)
fs.unlink('./writeFileMethod.json', (err) => {
    if (err) {
        console.log('ERROR IS : ' + err);
    }
});


// This method is blocking code and its used to delete a file , means that the entire file or code will wait until this func finish its job (sync)
fs.unlinkSync('./writeFileSyncMethod.json'); 