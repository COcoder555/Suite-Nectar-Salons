import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';


export default function Caro() {
  const items = [
    {
      src: '../../assets/salonimg.png',
      altText: 'Slide 1',
  
    
    },
    {
      src: '../../assets/salon2.jpg',
      altText: 'Slide 2',
    
    },
    {
      src: '../../assets/cspace.png',
      altText: 'Slide 3',
    
    }
  ];
  
  const Example = () => <UncontrolledCarousel items={items} />;

  return (
 
    <div className='carausel'><Example/></div>

  )
} 