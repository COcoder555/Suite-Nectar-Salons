import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './carousel1.scss'
export default function Caro() {
  
  const items = [
    {
      src: '../../assets/HBS.jpg',
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
  
  const Example = () => <UncontrolledCarousel className ="carausel" items={items} />;

  return (
 <div className='row'>
  <div className='col-12'>
    <div className='carausel1'><Example/></div>
    </div>
    </div>
  )
} 