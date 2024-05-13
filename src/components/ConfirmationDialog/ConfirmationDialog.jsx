import React from 'react';
import styles from './ConfirmationDialog.module.css';
import ButtonPrimary from '../Button/ButtonPrimary';

const ConfirmationDialog = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <p className={styles.message}>{message}</p>
        <div className={styles.buttonContainer}>
          <ButtonPrimary size="40" onClick={onConfirm}>예</ButtonPrimary>
          <ButtonPrimary size="40" onClick={onClose}>아니요</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
