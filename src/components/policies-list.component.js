import React, { Component } from "react";
import policyDataService from "../services/policy-data-service";

export default class PoliciesList extends Component {
  constructor(props) {
    super(props);
    this.retrievePolicies = this.retrievePolicies.bind(this);
    this.setActivePolicy = this.setActivePolicy.bind(this);

    this.state = {
      policies: [],
      currentPolicy: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.retrievePolicies();
  }

  retrievePolicies() {
    policyDataService.getAll()
      .then(res => {
        this.setState({
          policies: res.data
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  setActivePolicy(policy, index) {
    this.setState({
      currentPolicy: policy,
      currentIndex: index
    });
    console.log(policy);
    console.log(index);
  };

  render() {
    return (
      <div>
          <div>
            <br />
            <h5>Policies</h5>
            <ul>
              {this.state.policies.map((policy, index) =>
                <li
                  onClick={() => this.setActivePolicy(policy, index)}
                  key={index}
                >{policy.holder_first_name} {policy.holder_last_name} - {policy.name}</li>)}
            </ul>
          </div>
          <div>
              {this.state.currentPolicy ? 
              
              <div>
                <div>
                  <label><strong>Policy Name:</strong></label>{" "}
                  {this.state.currentPolicy.name}
                </div>

                <div>
                  <label><strong>Policy Type:</strong></label>{" "}
                  {this.state.currentPolicy.type}
                </div>

                <div>
                  <label><strong>First Name:</strong></label>{" "} 
                  {this.state.currentPolicy.holder_first_name}
                </div>

                <div>
                 <label><strong>Last Name:</strong></label>{" "}
                  {this.state.currentPolicy.holder_last_name}
                </div>

                <div>
                 <label><strong>Account id:</strong></label>{" "}
                  {this.state.currentPolicy.holder_account_id}
                </div>

                <div>
                 <label><strong>Is Policy Active:</strong></label>{" "}
                  {this.state.currentPolicy.is_active ? "Yes" : "No"}
                </div>

                <div>
                 <label><strong>Has Active Claim:</strong></label>{" "}
                  {this.state.currentPolicy.has_active_claim  ? "Yes" : "No"}
                </div>

                <div>
                 <label><strong>Effective Date:</strong></label>{" "}
                  {new Date(this.state.currentPolicy.effective_date).toString()}
                </div>

                <div>
                  <label><strong>Termination Date:</strong></label>{" "}
                  {new Date(this.state.currentPolicy.termination_date).toString()}
                </div>

              </div> 
              
              : 
              <div>Please Select A Policy</div>}
          </div>

      </div>
    );
  }

  // put current policy date here (all fields)


};