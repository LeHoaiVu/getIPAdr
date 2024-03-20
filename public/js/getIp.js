const spawner = require('child_process').spawn
let result = ''

const data_to_pass_in = "Send this to python script"

const python_process = spawner('python', ['./getIp.py', data_to_pass_in])

python_process.stdout.on('data', (data) => {
    console.log(data.toString());
    result = data.toString()
})

module.exports = result