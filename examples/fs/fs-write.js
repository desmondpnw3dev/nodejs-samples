/**
 * @file fs-write.js
 * @description NodeJS Samples - File Sysyem Write File Module
 * @author Desmond G, Jones <desmond@pnw3dev.com>
 */

/**
 * FS Write Module
 */
module.exports = ({fs}) => {
    /**
     * writeFile
     *
     * @param  {string} file file name description
     * @param  {*} data      data to write
     * @return {Promise}
     */
    function writeFile(file, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(file,data, (err) => {
                if (err) { return reject(err); }
                return resolve(data)
            });
        });
    }

    /**
     * test method
     */
    function test() {
        writeFile('fs-test-write.txt','Testing the write to file!')
        .then(resp => console.log(resp))
        .catch(err => console.error(err));
    }
    // test() // invoke test

    /**
     * PUBLIC METHODS
     */
    return {
        writeFile
    };
};

console.info('FS Write Module Ready!');
