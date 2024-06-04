const postReducer = (state: any = { posts: [] }, action: any) => {
  switch (action.type) {
    case "CREATE_SEND":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};

export default postReducer;
