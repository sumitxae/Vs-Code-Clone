const { json } = require('body-parser');
const { name } = require('ejs');
const fs = require('fs').promises;
const path = require('path');
const { stringify } = require('querystring');

async function findRootFolderName() {
    const files = await fs.readdir("../../Files");
    const rootFolderPath = "../../../";

    const names = await fs.readdir(rootFolderPath);

    for (const elem of names) {
        const elemData = await fs.readdir(path.join(rootFolderPath, elem, 'Files'));
        if (JSON.stringify(files) === JSON.stringify(elemData)) {
            return files;
        }
    }

    return null; // Return a default value if no match is found
}

module.exports = findRootFolderName;
