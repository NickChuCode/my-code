function rgb2hex(sRGB) {
    var reg = /^rgb\(\s*(\d+)\,\s*(\d+)\,\s*(\d+)\s*\)\s*$/
    return sRGB.replace(reg, function($1, $2, $3, $4) {
        return '#' + toHex($2) + toHex($3) + toHex($4)
    })
    function toHex(str) {
        return ("0" + (+str).toString(16)).slice(-2)
    }
}
