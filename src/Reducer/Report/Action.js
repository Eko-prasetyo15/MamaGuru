import axios from 'axios'

const URL = `${process.env.REACT_APP_BASE_URL}/reports/fetch_reports?kids_id=f54ead50-c1be-11eb-9be1-0242ac110002`;


export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const getDataSuccess = (datas) => ({
    type: 'GET_DATA_SUCCESS',
    datas,
});
const getDataFailure = (err) => ({
    type: 'GET_DATA_FAILURE',
    err,
});

export const getReport = () => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(getDataSuccess(response.data.reports));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getDataFailure(error))
               
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};



