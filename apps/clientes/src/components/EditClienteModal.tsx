import React, { useState, useEffect } from 'react';
import './CreateClienteModal.css';

import { ClienteService } from '../services/api';

interface EditClienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  clienteId?: number;
  cliente?: { name: string; salary: number; companyValuation: number };
  onSuccess?: () => void;
}

const EditClienteModal: React.FC<EditClienteModalProps> = ({ isOpen, onClose, clienteId, cliente, onSuccess }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [companyValuation, setCompanyValuation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (cliente) {
      setName(cliente.name || '');
      setSalary(cliente.salary?.toString() || '');
      setCompanyValuation(cliente.companyValuation?.toString() || '');
    }
  }, [cliente, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !salary || !companyValuation || !clienteId) return;
    try {
      await ClienteService.atualizar(String(clienteId), {
        name: name.trim(),
        salary: Number(salary),
        companyValuation: Number(companyValuation),
      });
      setShowSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 1200);
    } catch (err) {
      setShowSuccess(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <button type="button" className="cancelar" onClick={onClose}>
            <svg width="18px" height="18px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>
          <h2>Editar Cliente</h2>
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
              <button type="submit" className="salvar">Salvar alterações</button>
            </div>
          </form>
        </div>
      </div>
      {showSuccess && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span>Cliente editado com sucesso!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditClienteModal;
