import React, { useState } from 'react';
import SuccessPopup from './SuccessPopup';
import './CreateClienteModal.css';

interface CreateClienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (cliente: { name: string; salary: number; companyValuation: number }) => void;
}


const CreateClienteModal: React.FC<CreateClienteModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [companyValuation, setCompanyValuation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !salary || !companyValuation) return;
    onSave({ name: name.trim(), salary: Number(salary), companyValuation: Number(companyValuation) });
    setName('');
    setSalary('');
    setCompanyValuation('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <button type="button" className="cancelar" onClick={onClose}>
            <svg width="18px" height="18px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
          <h2>Criar Cliente</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="text" value={name} placeholder='Digite o Nome' onChange={e => setName(e.target.value)} required />
            </label>
            <label>
              <input type="number" value={salary} placeholder='Digite o Salário' onChange={e => setSalary(e.target.value)} required min="0" step="0.01" />
            </label>
            <label>
              <input type="number" value={companyValuation} placeholder='Digite o Empresa' onChange={e => setCompanyValuation(e.target.value)} required min="0" step="0.01" />
            </label>
            <div className="modal-actions">
              <button type="submit" className="salvar">Criar cliente</button>
            </div>
          </form>
        </div>
      </div>
      <SuccessPopup show={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
};

export default CreateClienteModal;
