import React from 'react';
import ReactDOM from 'react-dom';

class Values extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Birthdate</th>
                        <th>Sex</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.values && this.props.values.map(value => {
                    return <tr>
                        <td>{value.id}</td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                        <td>{value.birthdate}</td>
                        <td>{value.sex}</td>
                    </tr>
                })}
                </tbody>
            </table>
        );
    }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      id: props.id,
      email: props.email,
      first_name: props.first_name,
      last_name: props.last_name,
      birthdate: props.birthdate,
      sex: props.sex
    };

    this.create = this.create.bind(this);
    this.onChange = this.onChange.bind(this);

  }
    onChange(changeObject) {
        return changeObject;
    }

  componentDidMount() {
    // get all entities - GET
      fetch("https://o79z9jqhb0.execute-api.us-west-2.amazonaws.com/development/patients/", {
          "method": "GET",
          "headers": {
              "content-type": "text/plain",
              "accept": "*/*"
          },
      })
          .then(response => response.json())
          .then(response => {
              this.setState({
                  Values: response.values.items
              });
          })
          .catch(err => {
              console.log(err);
          });
  }


  create(e) {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch("https://o79z9jqhb0.execute-api.us-west-2.amazonaws.com/development/patients/", {
      "method": "POST",
      "headers": {
        "content-type": "text/plain",
        "accept": "text/plain"
      },
      "body": JSON.stringify({
        id: this.state.id,
        email: this.state.email,
        first_name: this.state.first,
        last_name: this.state.last_name,
        birthdate: this.state.birthdate,
        sex: this.state.sex
      })
    })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err);
        });
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Dialogue Coding Challenge</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">By: Srikar Kovvali</legend>
                <label htmlFor="id">
                  ID:
                  <input
                      name="id"
                      id="id"
                      type="number"
                      className="form-control"
                      value={this.state.id}
                      onChange={(e) => this.onChange({ id: e.target.value })}
                      required
                  />
                </label>
                <label htmlFor="email">
                  Email:
                  <input
                      name="email"
                      id="email"
                      type="string"
                      className="form-control"
                      value={this.state.email}
                      onChange={(e) => this.onChange({email: e.target.value })}
                      required
                  />
                </label>
                <label htmlFor="first_name">
                  First Name:
                  <input
                      name="first_name"
                      id="first_name"
                      type="string"
                      className="form-control"
                      value={this.state.first_name}
                      onChange={(e) => this.onChange({ first_name: e.target.value })}
                      required
                  />
                </label>
                <label htmlFor="last_name">
                  Last Name:
                  <input
                      name="last_name"
                      id="last_name"
                      type="string"
                      className="form-control"
                      value={this.state.last_name}
                      onChange={(e) => this.onChange({ last_name: e.target.value })}
                      required
                  />
                </label>
                <label htmlFor="birthdate">
                  Birthdate:
                  <input
                      name="birthdate"
                      id="birthdate"
                      type="date"
                      className="form-control"
                      value={this.state.birthdate}
                      onChange={(e) => this.onChange({ birthdate: e.target.value })}
                      required
                  />
                </label>
                <label htmlFor="sex">
                  Sex:
                  <input
                      name="sex"
                      id="sex"
                      type="string"
                      className="form-control"
                      value={this.state.sex}
                      onChange={(e) => this.onChange({ sex: e.target.value })}
                      required
                  />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Add/Update
                </button>
                <button className="btn btn-info" type='button' onClick={(e) => this.componentDidMount(e)}>
                  Show Values
                </button>
              </form>
                <Values values={this.state.values}/>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.getElementById("App");
ReactDOM.render(<App />, domContainer);
export default App