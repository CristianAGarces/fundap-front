import React from 'react';

interface DocumentTypeTagProps {
  type: string;
}

const DocumentTypeTag: React.FC<DocumentTypeTagProps> = ({ type }) => {
  let bgColor = '';
  let textColor = '';
  
  // Color mapping based on document type
  switch (type.toLowerCase()) {
    case 'cédula':
      bgColor = 'bg-emerald-100';
      textColor = 'text-emerald-800';
      break;
    case 'tarjeta identidad':
    case 'tarjeta identidad':
      bgColor = 'bg-red-100';
      textColor = 'text-red-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      <span className="mr-1.5">•</span>
      {type}
    </span>
  );
};

export default DocumentTypeTag;