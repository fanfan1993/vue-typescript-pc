import {ActionTree} from 'vuex'
import jwt_decode from 'jwt-decode';

const action:ActionTree<any,any> = {
    async setUser({commit},user:any) {
        let decoded: any = jwt_decode(user)
        commit('SET_USER', decoded)
    },
    clearBookList({ commit }) {
        commit('CLEAR_BOOKLIST');
    },
    // 获取假数据
    async bookList({ commit }, data: any) {
        console.log('通过action获取bookList数据');
        const res: any = {
            Total: 3,
            List: [
                {
                    ID: 234,
                    CreatedAt: "2019-07-02T13:38:32Z",
                    UpdatedAt: "2019-07-02T13:38:32Z",
                    DeletedAt: null,
                    Name: "鲁滨逊漂流记",
                    Count: "2",
                    Author: "鲁滨逊",
                    Type: "冒险"
                },
                {
                    ID: 236,
                    CreatedAt: "2019-07-02T13:39:00Z",
                    UpdatedAt: "2019-07-02T13:39:00Z",
                    DeletedAt: null,
                    Name: "红楼梦",
                    Count: "6",
                    Author: "曹雪芹",
                    Type: "言情"
                },
                {
                    ID: 237,
                    CreatedAt: "2019-07-02T13:39:32Z",
                    UpdatedAt: "2019-07-02T13:39:32Z",
                    DeletedAt: null,
                    Name: "西游记",
                    Count: "3",
                    Author: "吴承恩",
                    Type: "玄幻"
                },
            ]
        };
        res.Page = data.page;
        res.Size = data.size;
        commit('SAVE_BOOKLIST', res);
    },
}
export default action;

