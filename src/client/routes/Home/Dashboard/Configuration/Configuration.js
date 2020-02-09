import React from "react";
// import { useSelector } from "react-redux";
// import { getProfile } from "client/selectors";
import ChipsSelector from "client/components/ChipsSelector";
import Select from "client/components/Select";
import { COUNTRIES } from "client/constants";
import { Formik } from "formik";

const Configuration = () => {
  const initialValues = {
    description: ["owner", "product"],
    followedBy: ["@kingjames"],
    country: "Romania",
    minFollowers: 0
  };

  return (
    <>
      <h4>Twitter bot configuration</h4>
      <Formik initialValues={initialValues}>
        {formikProps => {
          const {
            values,
            setFieldValue,
            handleChange,
            handleReset,
            dirty
          } = formikProps;

          return (
            <>
              <div className="input-field col s12">
                <ChipsSelector
                  data={values.description.map(d => ({ tag: d }))}
                  onChange={val =>
                    setFieldValue(
                      "description",
                      val.map(v => v.tag)
                    )
                  }
                />
                <label className="active">Key phrases</label>
              </div>

              <div className="input-field col s6">
                <Select
                  className="input-field"
                  selectedOption={values.country}
                  data={COUNTRIES.map(c => c.name)}
                  onChange={val => setFieldValue("country", val)}
                />
                <label>Country</label>
              </div>
              <div className="input-field col s6">
                <input
                  name="minFollowers"
                  id="nr_of_followers"
                  type="number"
                  onChange={handleChange}
                />
                <label className="active" htmlFor="nr_of_followers">
                  Minimum followers
                </label>
              </div>
              <div className="input-field col s12">
                <ChipsSelector
                  data={values.followedBy.map(f => ({ tag: f }))}
                  onChange={val =>
                    setFieldValue(
                      "follwedBy",
                      val.map(v => v.tag)
                    )
                  }
                />
                <label className="active" htmlFor="followed_by">
                  Account is followed by users:
                </label>
              </div>
              <a
                className="green waves-effect waves-light btn right"
                disabled={!dirty}
                onClick={() => {
                  console.log(values);
                }}
              >
                Save Config
              </a>
              <a
                disabled={!dirty}
                className="grey lighten-3 grey-text text-darken-3 waves-effect waves-light btn right"
                onClick={handleReset}
              >
                Cancel
              </a>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default Configuration;
