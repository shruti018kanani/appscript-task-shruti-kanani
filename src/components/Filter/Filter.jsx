import React, { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import './Filter.css';

const Filter = () => {
  const [expanded, setExpanded] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false
  });

  const { filters, updateFilter } = useContext(ProductContext);

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleFilterChange = (category, value) => {
    updateFilter(category, value);
  };

  return (
    <div className='filter-container'>
      <FilterSection 
        title="IDEAL FOR" 
        expanded={expanded.idealFor} 
        toggle={() => toggleSection('idealFor')} 
        options={['Men', 'Women', 'Baby & Kids']} 
        selectedOptions={filters.idealFor}
        onChange={(value) => handleFilterChange('idealFor', value)}
      />
      <FilterSection 
        title="OCCASION" 
        expanded={expanded.occasion} 
        toggle={() => toggleSection('occasion')} 
        options={['Casual', 'Formal', 'Party']} 
        selectedOptions={filters.occasion}
        onChange={(value) => handleFilterChange('occasion', value)}
      />
      <FilterSection 
        title="WORK" 
        expanded={expanded.work} 
        toggle={() => toggleSection('work')} 
        options={['Office', 'Remote', 'Freelance']} 
        selectedOptions={filters.work}
        onChange={(value) => handleFilterChange('work', value)}
      />
      <FilterSection 
        title="FABRIC" 
        expanded={expanded.fabric} 
        toggle={() => toggleSection('fabric')} 
        options={['Cotton', 'Wool', 'Synthetic']} 
        selectedOptions={filters.fabric}
        onChange={(value) => handleFilterChange('fabric', value)}
      />
      <FilterSection 
        title="SEGMENT" 
        expanded={expanded.segment} 
        toggle={() => toggleSection('segment')} 
        options={['Premium', 'Budget', 'Luxury']} 
        selectedOptions={filters.segment}
        onChange={(value) => handleFilterChange('segment', value)}
      />
      <FilterSection 
        title="SUITABLE FOR" 
        expanded={expanded.suitableFor} 
        toggle={() => toggleSection('suitableFor')} 
        options={['Daily Wear', 'Occasion Wear', 'Special']} 
        selectedOptions={filters.suitableFor}
        onChange={(value) => handleFilterChange('suitableFor', value)}
      />
      <FilterSection 
        title="RAW MATERIALS" 
        expanded={expanded.rawMaterials} 
        toggle={() => toggleSection('rawMaterials')} 
        options={['Organic', 'Recycled', 'Synthetic']} 
        selectedOptions={filters.rawMaterials}
        onChange={(value) => handleFilterChange('rawMaterials', value)}
      />
      <FilterSection 
        title="PATTERN" 
        expanded={expanded.pattern} 
        toggle={() => toggleSection('pattern')} 
        options={['Striped', 'Solid', 'Patterned']} 
        selectedOptions={filters.pattern}
        onChange={(value) => handleFilterChange('pattern', value)}
      />
    </div>
  );
};

const FilterSection = ({ title, expanded, toggle, options, selectedOptions, onChange }) => (
  <div className='filter-section'>
    <button className='filter-title' onClick={toggle}>
      {title} {expanded ? '▲' : '▼'}
    </button>
    {expanded && (
      <div className='filter-options'>
        {options.map(option => (
          <div key={option} className='filter-option'>
            <input 
              type='checkbox' 
              id={option} 
              checked={selectedOptions.includes(option)}
              onChange={() => onChange(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Filter;
