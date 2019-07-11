import React, {Component} from 'react';
import Box from './Box';

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
    }
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
        <h1>COLOR BOX MAKER</h1>
        {boxes}
      </div>
    )
  }
}

export default BoxList;