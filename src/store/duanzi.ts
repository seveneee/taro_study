import { observable } from "mobx";
import { getDzList } from "../services/duanzi";


const duanziStore = observable({
    duanzi:[],
    getDzList:async function(){
        let res = await getDzList();
        console.log (res)
        this.duanzi = res.data.result
    }
});

export default duanziStore