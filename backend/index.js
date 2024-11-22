const AppManager= require('./src/componets/AppManager');

const run=async()=>{
const oAppManager=new AppManager();
await oAppManager.prepareService();
await oAppManager.runService();

}
run();