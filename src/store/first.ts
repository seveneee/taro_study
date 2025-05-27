import { observable } from "mobx";

const hahaStore = observable({
    username:"sevia",
    changeName(name){
        this.username = name ;

    }
})

export default hahaStore