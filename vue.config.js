module.exports={
    devServer:{
        //配置是否打开浏览器
        open:true,
        //启动后的端口号
        port :8080,
        //去除eslint错误透明遮罩
        overlay:false,
        proxy:{
            "/logreg":{
                target:"http://127.0.0.1:9527/",
                changeOrigin: true,
                pathRewrite: {
                    "^/logreg": "",
                }, 
            }
        }

    }
}