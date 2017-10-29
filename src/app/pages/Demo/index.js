import React, { Component } from 'react';
import Validator from 'srvalidator';

class Demo extends Component {
  constructor() {
    super();

    this.state = {
      Validator: new Validator(),
      rules: {
        name: 'required'
      },
      form: {
        'name': '',
      }
    };

    this.onChange = this.onChange.bind(this);
    this.hasError = this.hasError.bind(this);
  }

  onChange(e) {
    const {form, rules} = this.state;
    form[e.target.name] = e.target.value;

    this.state.Validator.validate(form, rules);
    this.setState({form});
  }

  hasError(elementName){
    return this.state.Validator.hasErrors(elementName);
  }

  getError(elementName){
    return this.state.Validator.first(elementName);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          React Validation Demo
        </div>

        <div className="panel-body">

          {this.state.Validator.getErrors()}

          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" onChange={this.onChange}/>
            <span className={'help-block '+(this.hasError('name'))}>{this.getError('name')}</span>
          </div>
        </div>

      </div>
    );
  }
}

export default Demo;