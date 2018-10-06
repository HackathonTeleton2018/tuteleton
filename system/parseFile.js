const exec = require("child_process").exec;
const fs = require("fs");
const tmp = require("tmp");

const getTmpFilePathFromBuffer = (name, buffer) => new Promise((resolve) => {
  const prefix = Math.ceil(Math.random() * 10000).toString()

  tmp.file({ name: prefix + name }, function(err, path, fd, cleanup) {
    if (err) throw err;

    console.log(path)

    fs.appendFile(path, buffer, () => {
      resolve(path)
    });
  });
})

const execute = (command) => new Promise((resolve) => {
  exec(command, function(error, stdout, stderr) {
    resolve(stdout);
  });
})


const parseFile = (fileName, fileBuffer) =>
  getTmpFilePathFromBuffer(fileName, fileBuffer)
    .then((path) => execute('./parse.sh ' + path))
    .then((fileDataAsJsonString) => JSON.parse(fileDataAsJsonString))

module.exports = parseFile
