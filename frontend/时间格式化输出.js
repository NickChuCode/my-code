function formatDate(dat, format) {
    var obj = {
        yyyy: dat.getFullYear(),
        yy: ("" + dat.getFullYear()).slice(-2),
        MM: ("0" + (dat.getMonth() + 1)).slice(-2),
        M: "" + (dat.getMonth() + 1),
        dd: ("0" + dat.getDate()).slice(-2),
        d: "" + dat.getDate(),
        HH: ("0" + dat.getHours()).slice(-2),
        H: "" + dat.getHours(),
        hh: ("0" + (dat.getHours() % 12)).slice(-2),
        h: "" + (dat.getHours() % 12),
        mm: ("0" + dat.getMinutes()).slice(-2),
        m: "" + dat.getMinutes(),
        ss: ("0" + dat.getSeconds()).slice(-2),
        s: "" + dat.getSeconds(),
        w: ['日', '一', '二', '三', '四', '五', '六'][dat.getDay()]
    }

    return format.replace(/[a-z]+/ig, function($1){return obj[$1]})
}
