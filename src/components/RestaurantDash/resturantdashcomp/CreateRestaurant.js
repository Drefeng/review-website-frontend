import React, { Component } from "react";
import { Button } from "reactstrap";

class CreateRestaurant extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      registred: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const data = {
      user_id: localStorage.getItem('id'),
      name: this.name.value,
      address: this.address.value,
      postcode: this.postcode.value,
      category: this.category.value,
      description: this.description.value,
      active: 1
    };

    console.log(data);
     fetch("https://review-website-api.herokuapp.com/restaurant/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.json();
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Name{" "}
            </span>
          </div>
          <input
            type="text"
            ref={ref => {
              this.name = ref;
            }}
            placeholder="text"
          />
        </div>
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Address
              </span>
            </div>

            <input
              ref={ref => {
                this.address = ref;
              }}
              placeholder="address"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Postcode
              </span>
            </div>
            <input
              ref={ref => {
                this.postcode = ref;
              }}
              placeholder="postcode"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Category
              </span>
            </div>
            <input
              ref={ref => {
                this.category = ref;
              }}
              placeholder="Category"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Description
              </span>
            </div>
            <input
              ref={ref => {
                this.description = ref;
              }}
              placeholder="Description"
            />
          </div>

          <Button type="submit" color="primary">
            Register
          </Button>
        </div>
      </form>
    );
  }
}

export default CreateRestaurant;
