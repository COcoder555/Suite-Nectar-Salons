import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


export default function Caro() {
  
  const items = [
    {
      src: '../../assets/work3.png',
      altText: 'Slide 1',
  
    
    },
    {
      src: '../../assets/salonimg.png',
      altText: 'Slide 2',
    
    },
    {
      src: '../../assets/bg2.jpg',
      altText: 'Slide 3',
    
    }
  ];
  
  const Example = () => <UncontrolledCarousel items={items} />;

  return (
 <div className='row'>
  <div className='col-12'>
    <div className='carausel'><Example/></div>
    </div>
    </div>
  )
} 