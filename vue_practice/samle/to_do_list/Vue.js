let app = new Vue({
    el:'#app',
    data(){
        return {
           newItem:'',
           query:'',
           todos:[]
        }
    },
    methods:{
        addItem: function (){
            if(!this.newItem) return
            const todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem(index){
            this.todos.splice(index, 1)
        }
    },
    computed:{
        filteredList(){
            let that = this
            return this.todos.filter((todo)=>{
                return todo.item.indexOf(that.query) !== -1
            })
        }
    }
})