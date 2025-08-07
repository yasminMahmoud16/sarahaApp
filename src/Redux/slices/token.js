// const { createSlice } = require("@reduxjs/toolkit");
// const { jwtDecode } = require("jwt-decode");

// const tkn = localStorage.getItem('token');


// const tokenData = createSlice({
//     name:"tokenData",
//     initialState: {
//         token: tkn,
//         userId:null
//     }, reducers: {
//         setToken: (state, action) => {
//             state.token = action.payload
//             localStorage.setItem('token', action.payload);
//             const decoded = jwtDecode(action.payload);
//             state.userId=decoded.id

//         }
//     }
// })