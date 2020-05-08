import {MutationTree} from 'vuex'

const mutation: MutationTree<any>  = {
    SET_USER(state:any,user:any):void {
        state.user = user;
    },
    SET_ROUTERS(state: any, routers:any){
        state.routers = routers;
    },
    SAVE_BOOKLIST(states: any, data: any) {
        states.bookList = data;
      },
    CLEAR_BOOKLIST(states: any) {
        states.bookList = {};
    }
}

export default mutation;
