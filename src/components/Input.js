import React from 'react';
import Output from './Output';
import { v4 as uuid } from 'uuid';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      title: '',
      mail: '',
      phone: '',
      school: '',
      department: '',
      from: '',
      to: '',
      degree: '',
      company: '',
      position: '',
      workFrom: '',
      workTo: '',
      exps: [],
      submitted: false,
      workExp: false,
    };
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  stateSetter = (e) => {
    let key = e.target.getAttribute('name');
    this.setState({ [key]: e.target.value });
  };

  addExp = (e) => {
    e.preventDefault();
    let workExp = {
      company: this.state.company,
      position: this.state.position,
      workFrom: this.state.workFrom,
      workTo: this.state.workTo,
      key: uuid(),
    };
    this.setState({ workExp: true });
    this.setState({ exps: [...this.state.exps, workExp] });
    document.querySelector('#expForm').reset();
    console.log(this.state.exps);
  };

  render() {
    let output = null;
    if (this.state.submitted === true) {
      output = (
        <Output
          name={this.state.name}
          surname={this.state.surname}
          title={this.state.title}
          mail={this.state.mail}
          phone={this.state.phone}
          school={this.state.school}
          department={this.state.department}
          from={this.state.from}
          to={this.state.to}
          degree={this.state.degree}
          exps={this.state.exps}
          workExp={this.state.workExp}
        />
      );
    } else output = null;
    return (
      <div className="cv-form">
        <div className="form-container">
          <form onSubmit={this.submit} id="form">
            <div className="inputs">
              <div className="personal">
                <h2>Personal Information |</h2>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  name="surname"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={this.stateSetter} />
                <label htmlFor="mail">E-Mail</label>
                <input
                  type="mail"
                  name="mail"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  required
                  onChange={this.stateSetter}
                />
              </div>
              <div className="educational">
                <h2>| Educational Information</h2>
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  name="school"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="from">From</label>
                <input
                  type="number"
                  name="from"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="to">To</label>
                <input
                  type="number"
                  name="to"
                  required
                  onChange={this.stateSetter}
                />
                <label htmlFor="degree">Degree</label>
                <input
                  type="number"
                  name="degree"
                  step=".01"
                  required
                  onChange={this.stateSetter}
                />
              </div>
            </div>
            <div className="buttons">
              <button id="reset" type="reset">
                RESET
              </button>
              <button id="submit" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
          <form onSubmit={this.addExp} id="expForm">
            <h2>Work Experience</h2>
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              required
              onChange={this.stateSetter}
            />
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              required
              onChange={this.stateSetter}
            />
            <label htmlFor="workFrom">From</label>
            <input
              type="number"
              name="workFrom"
              required
              onChange={this.stateSetter}
            />
            <label htmlFor="workTo">To</label>
            <input
              type="number"
              name="workTo"
              required
              onChange={this.stateSetter}
            />
            <button id="addExp" type="submit">
              Add Work Experience
            </button>
          </form>
        </div>
        <div className="cvContainer">{output}</div>
      </div>
    );
  }
}

export default Input;
