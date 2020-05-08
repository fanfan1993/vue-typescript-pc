import {GetterTree} from 'vuex'


const getter:GetterTree<any,any> = {
    user(state:any):any {
        return state.user
    },
    router(state:any):any{
        return state.routers;
    },
    bookList(state:any):any {
        return state.bookList
    }
}
export default getter
