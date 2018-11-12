import React from 'react';

class BenchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: "",
      lat: "",
      lng: "",
      seating: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Description:
          <input type="text" value={this.state.description} onChange={this.update("description")}/>
        </label>
        <label> Number of Seats:
          <input type="number" value={this.state.seating} onChange={this.update("seating")}/>
        </label>
        <label> Latitude:
          <input type="number" value={this.state.lat} onChange={this.update("lat")}/>
        </label>
        <label> Longitude:
          <input type="number" value={this.state.lng} onChange={this.update("lng")}/>
        </label>
        <input type="submit" value="Create Bench"/>
      </form>
    );
  }
}

export default BenchForm;
