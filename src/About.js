import React from "react";

let fixed = {
  minHeight: "85vh",
};
let none = {
  listStyle: "none",
  fontSize: "30px",
  marginTop: "10px",
};
let border = {
  border: "solid 5px #345B63",

  backgroundImage:
    "linear-gradient(to right top, #93b5c6, #9fb9ca, #aabdcd, #b4c1d0, #bec6d2, #c4c9d4, #caccd6, #d0cfd8, #d5d1da, #dbd3db, #e0d6db, #e4d8dc)",
};

export const About = () => {
  return (
    <div style={fixed}>
      <div style={border}>
        <p className="text-center">
          <h3>We at Children NGO </h3> <br />{" "}
          <h6>
            <ol style={none}>
              <li>
                A happy, healthy and creative child whose rights are protected and honoured in a society that is built on respect for dignity, justice and equity for all.
              </li>
              <li>
                With your support, we address children’s critical needs by working with parents, teachers, Anganwadi workers, communities, district and state level governments as well as the children themselves.
              </li>
              <li>
                We focus on changing behaviours and practices at the grassroots level and influencing public policy at a systemic level – thereby creating an ecosystem where children are made the nation’s priority.
              </li>
              <li>
                Our endeavours to multiply the impact of every rupee spent by getting infrastructure and services from the state that benefit the entire community in perpetuity.
              </li>
              <li>
                All it needs is for each one of us to come together and do everything in our power to contribute to a sustainable solution.
              </li>
              <li>
                A quality education not only builds knowledge, capabilities, life skills and values amongst children but also develops their creative, social and emotional abilities. It is crucial for their cognitive and personal development, including critical thinking and problem-solving.
              </li>
              <li>
                We believe that every child should be able to go to school and complete their education without any discrimination based on gender, caste or socio-economic status.
              </li>

            </ol>
          </h6>
          <br />
        </p>
      </div>
    </div>
  );
};
