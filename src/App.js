import React, {Component} from 'react';
import './App.css';
import {Editor} from "./components/Editor";
import {Display} from "./components/Display";

export class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    }
  }

  submitData = (newData) => {
    this.setState({formData: newData})
  }

  render() {
    return <div className='container-fluid'>
      <div className='row p-2'>
        <div className='col-6'>
          <Editor submit={this.submitData}/>
        </div>
        <div className='col-6'>
          <Display data={this.state.formData}/>
        </div>
      </div>
    </div>
  }
}

export default App;
