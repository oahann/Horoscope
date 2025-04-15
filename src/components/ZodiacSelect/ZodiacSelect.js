'use client';   
import React from 'react';
import Select, { components } from 'react-select';
import { zodiacOptions } from '@/components/data/zodiacOptions'; 
import { zodiacSelectStyles } from './zodiacSelectStyles'

const CustomSingleValue = (props) => (
  <components.SingleValue {...props}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {props.data.icon}
      {props.data.label}
    </div>
  </components.SingleValue>
);

export default function ZodiacSelect({ value, onChange }) {
  return (
    <Select
      value={value}
      options={zodiacOptions}
      onChange={onChange}
      components={{ SingleValue: CustomSingleValue }}
      getOptionLabel={(e) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {e.icon}
          {e.label}
        </div>
      )}
      styles={zodiacSelectStyles}
    />
  );
}