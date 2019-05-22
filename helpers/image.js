module.exports = {
    encryptString(string) {
        return CryptoJS.MD5(string, config.secret).toString();
    }
}