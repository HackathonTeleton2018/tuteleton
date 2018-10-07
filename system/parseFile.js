const spawn = require("child_process").spawn;
const fs = require("fs");
const tmp = require("tmp");

const getTmpFilePathFromBuffer = (name, buffer) => new Promise((resolve) => {
  const prefix = Math.ceil(Math.random() * 10000).toString()

  tmp.file({ name: prefix + name }, function(err, path, fd, cleanup) {
    if (err) throw err;

    console.log('File path: ' + path)

    fs.appendFile(path, buffer, () => {
      resolve(path)
    });
  });
})

const execute = (command, arg) => new Promise((resolve, reject) => {
  const child = spawn(command, [arg]);
  let result = ''

  child.stdout.on('data', function (data) {
     result = result + data.toString('utf8')
  });

  child.stderr.on('data', function (data) {
    reject('stderr: ' + data);
  });

  child.on('close', function (code) {
    resolve(result)
  });
})

const wrapString = str =>
  str.slice(0, 30) + '......' + str.slice(str.length - 30)

const parseFile = (fileName, fileBuffer) =>
  getTmpFilePathFromBuffer(fileName, fileBuffer)
    .then((path) => execute('./parse.sh', path))
    .then((fileDataAsJsonString) =>console.log(wrapString(fileDataAsJsonString)) || JSON.parse(fileDataAsJsonString))
    .catch(x => console.log('Error: ', x))

module.exports = parseFile
