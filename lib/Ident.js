
'use strict';

const crypto = require('crypto');
const os = require('os');
let _algorithm = 'sha1';
let sequence = 1;
let pastTime = null;

class Ident {

    static _getSequenceAndTimestamp() {

        const presentTime = new Date().getTime();

        if (pastTime === presentTime) {
            ++sequence;

            return {
                sequence: sequence,
                timestamp: presentTime
            };
        }

        pastTime = presentTime;
        sequence = 1;

        return {
            sequence: sequence,
            timestamp: presentTime
        };
    }

    static setAlgorithm(algorithm) {
        _algorithm = algorithm;
    }

    static identifier() {

        const parking = Ident._getSequenceAndTimestamp();

        const timestamp = parking.timestamp;
        const hostname = os.hostname();
        const pid = process.pid;
        const sequence = parking.sequence;

        const plainText = `${timestamp}${hostname}${pid}${sequence}`;

        const hash = crypto.createHash(_algorithm);
        hash.update(plainText, 'utf8');
        const cipherText = hash.digest('hex');

        return cipherText;
    }
}

module.exports = Ident;
