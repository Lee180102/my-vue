
let baseUrl = "";
switch (process.env.VUE_APP_ENV) {
    case 'dev':
        baseUrl = "http://localhost:8066/"  //开发环境url
        break
    case 'serve':
        baseUrl = "http://localhost:8089/"   //生产环境url
        break
}
 
export default baseUrl;