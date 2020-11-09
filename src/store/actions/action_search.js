export const actionCreator = (keyword) => {
    return (dispatch) => {
        dispatch({
            type: 'set',
            payload: keyword
        })
    }
}