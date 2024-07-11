how to create store using redux.

---

create store---configureStore()
Provider store={store}---provide store to app
create slice----cartslice,usersclice,etc...

createSlice({
name:"",
initialState:
reducers:{
addItem(state,action)=>{state=action.payload}
}

    }

)
export const {addItem,removeItem}=cartSlice.actions;
export default cartSlice.reducer;

put slice into the store
store{
reducer:{
cart:cartSlice,(name and slice)
user:userSlice,
name:slice
}
}
