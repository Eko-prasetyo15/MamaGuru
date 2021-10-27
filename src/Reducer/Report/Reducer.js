const initialState = {
    isLoading: false,
    datas: []
}
const ReportData = (state = initialState, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return { ...state, isLoading: !state.isLoading };
        case 'GET_DATA_SUCCESS':
            return { ...state, datas: action.datas }

        default:
            return state
    }

}

export default ReportData