import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      username: "",
      password: ""
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const {formType, errors} = this.props;
    let link;
    let linkName;
    if (formType == 'Signup') {
      link = 'login';
      linkName = link[0].toUpperCase() + link.slice(1);
    }
    let errorsLi;
    if (errors) {
      errorsLi = errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }
    return (
      <>
        <h2>{formType}</h2>
        {errorsLi}
        <form onSubmit={this.handleSubmit} className="session-form">
          <label> Username:
            <input type="text" value={this.state.username} onChange={this.update('username')}/>
          </label>
          <label> Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}/>
          </label>
          <input type="submit" value={formType} />
        </form>
        <Link to={`/${link}`}>
          {linkName}
        </Link>
      </>
    );
  }
}

export default SessionForm;
