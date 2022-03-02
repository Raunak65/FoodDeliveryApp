// action

import {
  ACCOUNT_DELETED,
  GET_PROFILE,
  PROFILE_ERROR,
} from "../../../redux/types/profileTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

// Create or update profile
export const createProfile = (formData, navigate, id) => async (dispatch) => {
  try {
    const res = await api.put(`/users/${id}`, formData);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(setAlert("Profile Updated", "success"));

    // if (edit) {

    // }
    navigate("/dashboard/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete account & profile
export const deleteAccount = (navigate, id) => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await api.delete(`/users/${id}`);
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your account has been permanently deleted"));
      navigate("/");
    } catch (err) {
      dispatch({
        type: ACCOUNT_DELETED,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
