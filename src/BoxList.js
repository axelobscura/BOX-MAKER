import React, {Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxes: [
        {
          width: 10,
          height: 10,
          color: 'orange'
        }
      ]
    };
    this.create = this.create.bind(this);
  }
  create(newBox){
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }
  render(){
    const boxes = this.state.boxes.map((box, index) => (
      <Box 
        key={index} 
        width={box.width} 
        height={box.height} 
        color={box.color} 
      />
    ));
    return(
      <div>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    )
  }
}

export default BoxList;