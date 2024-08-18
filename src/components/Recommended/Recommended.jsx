import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './Recommended.css';

const Recommended = () => {
  const { setSortOption ,setIsFilter,products } = useContext(ProductContext);
  const [selectedOption, setSelectedOption] = React.useState('RECOMMENDED');

  const handleChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    setSortOption(option);
  };

  return (
    <div className='recommended-container'>
      <div className='item-count'>
        <span className='item-number'>{products.length}</span> Items
      </div>
      <button className='hide-filter' onClick={()=>setIsFilter(prev=>!prev)}>HIDE FILTER</button>
      <div className='selector-container'>
        <select 
          className='selector'
          value={selectedOption}
          onChange={handleChange}
        >
          <option value='RECOMMENDED'>RECOMMENDED</option>
          <option value='NEWEST FIRST'>NEWEST FIRST</option>
          <option value='POPULAR'>POPULAR</option>
          <option value='PRICE: HIGH TO LOW'>PRICE: HIGH TO LOW</option>
          <option value='PRICE: LOW TO HIGH'>PRICE: LOW TO HIGH</option>
        </select>
      </div>
    </div>
  );
};

export default Recommended;
