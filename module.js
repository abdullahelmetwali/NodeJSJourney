const sayHi = (val) => {
    console.log(`HI ${val}`)
}

module.exports = { sayHi } // main module export func (created in module wrapper)
// exports = { sayHi } // this is a reference ( اختصار ) to module.exports
// export default sayHi

/*
- MODULE WRAPPER : 

==> (function (exports, require, module, __filename, __dirname) {
    MODULE FUNCTION 
});

# It's a function that wraps around the module code. 
# Make the code inside it scoped to the module itself not in the global scope.
*/