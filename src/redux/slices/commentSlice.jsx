import { createSlice } from "@reduxjs/toolkit";

const getCommentFromStorage = () => {
    if(localStorage.getItem("comments")) {
        return JSON.parse(localStorage.getItem("comments"));
    }
    return [];
};

const writeFromCommentsToStorage = (comments) => {
    localStorage.setItem("comments", JSON.stringify(comments));
}

const initialState = {
    comments: getCommentFromStorage(),
}

export const commentSlice = createSlice({
    name: "comments", 
    initialState,
    reducers: {
        addToComments: (state, action) => {
           state.comments = [...state.comments, action.payload];
           writeFromCommentsToStorage(state.comments);
        }
    }
});

export const { addToComments } = commentSlice.actions;
export default commentSlice.reducer;