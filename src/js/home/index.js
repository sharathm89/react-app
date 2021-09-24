import React from "react";
import { func, bool } from "prop-types";
import { connect } from "react-redux";

import { startLoading, stopLoading } from "Actions";
// import { startLoading, stopLoading } from "../../actions";

import "./home.css";

const Home = ({ startLoading, stopLoading, loading }) => {
  const onBtnClick = () => {
    if (loading) {
      stopLoading();
    } else {
      startLoading();
    }
  };
  console.log(loading);
  return (
    <div styleName="container">
      <button onClick={onBtnClick}>
        {loading ? "Stop Loading" : "Start Loading"}
      </button>
    </div>
  );
};

Home.propTypes = {
  startLoading: func,
  stopLoading: func,
  loading: bool,
};

const mapStateToProps = ({ settings }) => {
  const { loading } = settings;

  return { loading };
};

const mapDispatchToProps = (dispatch) => ({
  startLoading: () => dispatch(startLoading()),
  stopLoading: () => dispatch(stopLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
