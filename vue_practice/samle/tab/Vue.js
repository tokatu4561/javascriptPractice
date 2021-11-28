let app = new Vue({
    el:'#app',
    data(){
        return {
            active: 1,
            items: [
                {id:1,title:'サイトの情報'},
                {id:2,title:'商品情報'},
                {id:3,title:'お問い合わせ'},
            ]
        }
    },
    methods:{
        activate(id) {
            this.active = id;
        }
    }
})