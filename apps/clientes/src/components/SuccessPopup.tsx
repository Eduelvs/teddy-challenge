import React from 'react';
import './SuccessPopup.css';

interface SuccessPopupProps {
  show: boolean;
  message?: string;
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({
  show,
  message = 'Cliente criado com sucesso!',
  onClose,
}) => {
  if (!show) return null;
  return (
    <div className="success-popup-overlay" onClick={onClose}>
      <div className="success-popup">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#22c55e" />
          <path
            d="M7 13l3 3 7-7"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default SuccessPopup;
