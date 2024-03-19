const spawner = require('child_process').spawn

const data_to_pass_in = "Send this to python script"

const python_process = spawner('python', ['./getIp.py', data_to_pass_in])

python_process.stdout.on('data', (data) => {
    console.log('Data received from python script :>> ', data.toString());
})