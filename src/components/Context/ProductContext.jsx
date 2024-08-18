// src/components/Context/ProductContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isFilter,setIsFilter]=useState(true)
  const [filters, setFilters] = useState({
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: []
  });

  const [sortOption, setSortOption] = useState('RECOMMENDED');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const updateFilter = (category, value) => {
    setFilters(prevFilters => {
      const isSelected = prevFilters[category].includes(value);
      if (isSelected) {
        return {
          ...prevFilters,
          [category]: prevFilters[category].filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...prevFilters[category], value]
        };
      }
    });
  };

  const filteredProducts = products.filter(product => {
    // Filter by Ideal For (Category)
    const matchesIdealFor = !filters.idealFor.length || filters.idealFor.some(filter => {
      if (filter === 'Men') return product.category === "men's clothing";
      if (filter === 'Women') return product.category === "women's clothing";
      if (filter === 'Baby & Kids') return product.category === "baby's clothing";
      return false;
    });
  
    // Filter by Occasion (Hypothetical Condition)
    const matchesOccasion = !filters.occasion.length || filters.occasion.some(filter => {
      if (filter === 'Casual') return product.description.includes('casual') || product.title.toLowerCase().includes('casual');
      if (filter === 'Formal') return product.description.includes('formal') || product.title.toLowerCase().includes('formal');
      if (filter === 'Party') return product.description.includes('party') || product.title.toLowerCase().includes('party');
      return false;
    });
  
    // Filter by Work (Hypothetical Condition)
    const matchesWork = !filters.work.length || filters.work.some(filter => {
      if (filter === 'Office') return product.description.includes('office') || product.title.toLowerCase().includes('office');
      if (filter === 'Remote') return product.description.includes('remote') || product.title.toLowerCase().includes('remote');
      if (filter === 'Freelance') return product.description.includes('freelance') || product.title.toLowerCase().includes('freelance');
      return false;
    });
  
    // Filter by Segment (Price Range)
    const matchesSegment = !filters.segment.length || filters.segment.some(filter => {
      if (filter === 'Premium') return product.price > 100;
      if (filter === 'Budget') return product.price <= 100 && product.price >= 20;
      if (filter === 'Luxury') return product.price > 200;
      return false;
    });
  
    // Filter by Suitable For (Hypothetical Condition)
    const matchesSuitableFor = !filters.suitableFor.length || filters.suitableFor.some(filter => {
      if (filter === 'Daily Wear') return product.description.includes('daily') || product.title.toLowerCase().includes('daily');
      if (filter === 'Occasion Wear') return product.description.includes('occasion') || product.title.toLowerCase().includes('occasion');
      if (filter === 'Special') return product.description.includes('special') || product.title.toLowerCase().includes('special');
      return false;
    });
  
    // Filter by Raw Materials (Hypothetical Condition)
    const matchesRawMaterials = !filters.rawMaterials.length || filters.rawMaterials.some(filter => {
      if (filter === 'Organic') return product.description.includes('organic') || product.title.toLowerCase().includes('organic');
      if (filter === 'Recycled') return product.description.includes('recycled') || product.title.toLowerCase().includes('recycled');
      if (filter === 'Synthetic') return product.description.includes('synthetic') || product.title.toLowerCase().includes('synthetic');
      return false;
    });
  
    // Filter by Pattern (Hypothetical Condition)
    const matchesPattern = !filters.pattern.length || filters.pattern.some(filter => {
      if (filter === 'Striped') return product.description.includes('striped') || product.title.toLowerCase().includes('striped');
      if (filter === 'Solid') return product.description.includes('solid') || product.title.toLowerCase().includes('solid');
      if (filter === 'Patterned') return product.description.includes('patterned') || product.title.toLowerCase().includes('patterned');
      return false;
    });
  
    return matchesIdealFor && matchesOccasion && matchesWork && matchesSegment && matchesSuitableFor && matchesRawMaterials && matchesPattern;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortOption) {
      case 'NEWEST FIRST':
        return new Date(b.date) - new Date(a.date);
      case 'POPULAR':
        return b.rating.count - a.rating.count;
      case 'PRICE: HIGH TO LOW':
        return b.price - a.price;
      case 'PRICE: LOW TO HIGH':
        return a.price - b.price;
      default:
        return 0; // 'RECOMMENDED' or default sorting
    }
  });
  

  return (
    <ProductContext.Provider value={{ products: filteredProducts || sortedProducts, filters,isFilter, updateFilter,setSortOption,setIsFilter }}>
      {children}
    </ProductContext.Provider>
  );
};
