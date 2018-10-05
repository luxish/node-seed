// @flow
/**
 * Cleans the provided folder. In case there is no folder provieded, the default one is used ( "dist/" ) 
 */
const fs = require('fs');

const ROOT_PATH = "./";
const DEFAULT_DIR = "dist";
const args = process.argv;

// Resolves the the root directory's path.
const resoloveRootFolderPath = () => {
    let dirName = DEFAULT_DIR;
    if(process.argv.length === 2) {
        console.log("No directory provided. Will use default: " + DEFAULT_DIR);
    } else {
        dirName = process.argv[2];
    }
    return ROOT_PATH + dirName;
}

// Removes the directory and all files and directories that it contains.
// The clean is done synchronously using recursion.  
const removeDirWithSubTree =  async (path) => {
    let fileS = fs.statSync(path);
    if (fileS.isFile()) {
        fs.unlinkSync(path);
        console.log("Removed file " + path);
        return;
    } 
    
    fs.readdirSync(path).forEach( async (subPath, idx, arr) =>  await removeDirWithSubTree(path + "/" + subPath));
    fs.rmdirSync(path); 
    console.log("Removed dir " + path);
}

const rootDir = resoloveRootFolderPath();
fs.stat(rootDir, (err, status) => { 
    if(err) {
        console.log(rootDir + " does not exist") 
        return;
    }
    removeDirWithSubTree(rootDir) 
});
