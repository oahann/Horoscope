export const zodiacSelectStyles = {
  control: (base) => ({
    ...base,
    padding: '4px',
    borderRadius: '8px',
    boxShadow: 'none',
    borderColor: '#9c27b0',
    backgroundColor: 'var(--background, transparent)',
    width: '200px',
    '&:hover': {
      borderColor: '#7b1fa2', 
    }
  }),
  option: (base, state) => ({
    ...base,
    borderRadius: '5px',
    backgroundColor: state.isSelected ? '#c976e9' : state.isFocused ? '#e1bee7' : 'var(--background, transparent)',
    color: state.isSelected ? '#333' : state.isFocused ? '#333' : 'var(--foreground, inherit)',
    '&:hover': {
      backgroundColor: '#e1bee7',
      color: '#333', 
    }
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--foreground, inherit)', 
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: '#9c27b0', 
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#9c27b0',
    '&:hover': {
      color: '#7b1fa2', 
    }
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(156, 39, 176, 0.15)',
    backgroundColor: 'var(--background, white)'
  }),
  menuList: (base) => ({
    ...base,
    padding: '8px',
  }),
};