import axios from 'axios'

const URL = `${process.env.REACT_APP_BASE_URL}/admin/get_user_details?user_id=`;


export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const getProfileSuccess = (datas) => ({
    type: 'GET_PROFILE_SUCCESS',
    datas,
});
const getProfileFailure = (err) => ({
    type: 'GET_PROFILE_FAILURE',
    err,
});



export const getProfile = (id) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.get(URL + `${id}`, {},
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(getProfileSuccess(response.data));
            })
            .catch(function (error) {
                console.error(error);
                dispatch(getProfileFailure(error))

            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};



