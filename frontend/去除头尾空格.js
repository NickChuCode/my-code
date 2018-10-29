// 用+而不是*可以提高正则的匹配效率
function trimHead(str) {
    return str.replace(/^\s+/, '')
}

function trimTail(str) {
    return str.replace(/\s+$/, '')
}
