/**
 * @file fs-read.js
 * @author Desmond G, Jones <desmond@pnw3dev.com>
 */

/**
 * FS Read Module
 */
module.exports = ({fs}) => {
    /**
     * writeFile
     *
     * @param  {string} file file name description
     * @param  {*} data      data to write
     * @return {Promise}
     */
    function readFile(file,encoding='utf8') {
        return new Promise((resolve, reject) => {
            fs.readFile(file,encoding,(err,data) => {
                if (err) { return reject(err); }
                return resolve(data)
            });
        });
    }

    /**
     * test method
     */
    function test() {
        readFile('fs-test-write.txt','utf8')
        .then(resp => console.log(resp))
        .catch(err => console.error(err));
    }
    // test() // invoke test

    /**
     * PUBLIC METHODS
     */
    return {
        readFile
    };
};

console.info('FS Read Module Ready!');
