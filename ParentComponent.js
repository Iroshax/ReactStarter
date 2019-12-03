import React, {Component} from 'react'; 
import FirstChild from './firstChild';

class ParentComponent extends Component{

  render(){
    return (
      <h1>
        Im the parent component.
        <FirstChild text = {"I'm the first child"}/>
        <FirstChild text = {"I'm the second child"}/>
        <FirstChild text = {"I'm the thired child"}/>
      </h1>);
  }
}
export default ParentComponent;
