const moment = require("moment");
const sha1 = require("sha1");

module.exports = {
    formatDate: (d) => {
        const m = typeof d === "number" ? moment.utc(d, 'X') : moment(d);
        return m.format("YYYY-MM-DD");
    },
    formatNumber: (n) => {
        return (Math.round(n * 100) / 100).toFixed(2);
    },
    getDateStr: (year, month, day) => {
        if (typeof year === "object") {
            month = year.month + 1;
            day = year.day;
            year = year.year;
        }
        return `${year}-${("" + month).padStart(2, "0")}-${("" + day).padStart(2, "0")}`;
    },
    getHashedPassword: (password) => {
        return sha1(`${password}${process.env.PASSWORD_SALT || "yenop"}`);
    }
};