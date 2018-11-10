// 完成 cookieJar 单例，它有三个方法：
//
// set(name, value, days)：设置 cookie 的值，days 为多少天以后过期。
// get(name)：获取 cookie 的值。
// remove(name)：删除 cookie 的值。
// （本题来源：阿里巴巴前端笔试题）
const cookieJar = {
    set (name, value, days) {
        /* TODO */
        document.cookie = `${name}=${value}; expires=${new Date(Date.now() + days * 1000 * 60)}`
    },
    get (name) {
        /* TODO */
        let cookie = document.cookie
        let reg = new RegExp(`${name}=([^;]+)`)
        let res = reg.exec(cookie)
        return res[1]
    },
    remove (name) {
        /* TODO */
        // 删除cookie最简单的方法是将其值设为空，expires设为过去的时间
        //（经过测试，500天以内不行，一般设为-730，即为两年前）
        this.set(name, "", -500)
    }
}