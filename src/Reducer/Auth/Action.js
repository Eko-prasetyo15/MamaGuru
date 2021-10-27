import axios from 'axios'
import history from '../../history'
import Swal from 'sweetalert2'

const URL = `${process.env.REACT_APP_BASE_URL}/auth/auth`;

export const handlePush = (location) => {
    setTimeout(() => {
        history.push(location)
        window.location.reload()
    }, 2000);
}

export const isLoading = () => ({
    type: "IS_LOADING",
});
const request = axios.create({
    baseURL: URL,
});
const postDataSuccess = (datas) => ({
    type: 'POST_DATA_SUCCESS',
    datas,
});
const postDataFailure = (err) => ({
    type: 'POST_DATA_FAILURE',
    err,
});

export const postLogin = (username, password) => {
    return (dispatch) => {
        dispatch(isLoading())
        return request.post(URL, {
            user_name: username,
            password: password
        },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(function (response) {
                dispatch(postDataSuccess(response.data));
                localStorage.setItem("id", response.data.user_id);
                if (response) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Login Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                setTimeout(() => {
                    handlePush("/report")
                }, 300);
            })
            .catch(function (error) {
                console.error(error);
                dispatch(postDataFailure(error))
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(isLoading());
                }, 2500);
            });
    };
};


