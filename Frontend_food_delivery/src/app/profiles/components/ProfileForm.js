import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import {
  createProfile,
  deleteAccount,
} from "../../profiles/actions/profileAction";

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  auth: {
    user: { id },
  },
  deleteAccount,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    houseno: "",
    street: "",
    zip: "",
    state: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const { name, email, state, houseno, street, zip, city } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const address = { state, houseno, street, zip, city };
    createProfile({ name, email, address }, navigate, id);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Profile</h1>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="State"
                  name="state"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="City"
                  name="city"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Street"
                  name="street"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="House Number"
                  name="houseno"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Zip"
                  name="zip"
                  onChange={onChange}
                />
              </div>
              <input type="submit" className="btn btn-info btn-block mt-4" />
              <button
                type="submit"
                className="btn btn-dark btn-block mt-4"
                onClick={() => deleteAccount(navigate, id)}
              >
                Delete Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { createProfile, deleteAccount })(
  ProfileForm
);
