const fileSystem = require('fs');
const colors = require('colors');

const { resolve } = require('path');


module.exports.listarTabla = (base, limite) => {

    console.log('=========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=========================='.green);

    for (let i = 1; i <= limite; i++)
        console.log(`${base} * ${i} = ${base * i}\n`);
}

module.exports.crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("Error: El valor introducido no es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++)
            data += `${base} * ${i} = ${base * i}\n`;

        fileSystem.writeFile(`archivos/tabla-base-${base}-limite-${limite}.txt`, data, err => {
            if (err)
                reject(err);
            else
                resolve(`tabla-base-${base}-limite-${limite}.txt`);
        });

    });

}

// module.exports = {
//     crearArchivo
// }