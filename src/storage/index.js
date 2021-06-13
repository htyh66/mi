const STORAGE_KEY = 'mall'

export default {
    // 获取存储库
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY || '{}'))
    },
    //获取模块中的属性
    getItem(key, module_name) {
        // ('name','user') => getItrm('user') => STORAGE_KEY['user'] ==  {...}
        // => user['name']
        if (module_name) {
            let val = this.getItem(module_name)
            if(val) return val[key]
        }
        return this.getStorage()[key]
    },
    // 存储值
    setItem(key, value, module_name) {
        // val = {...} => { key: value} => {module_name : val}
        if(module_name){
            let val = this.getItem(module_name)
            val[key] = value
            this.setItem(module_name, val)
        }else{
            let val = this.getStorage()
            val[key] = value
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },
    //清除属性
    clear(key, module_name) {
        let val = this.getStorage()
        if(module_name){
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        //新JSON对象转换为JSON字符串后设置
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}