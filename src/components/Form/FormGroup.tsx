import React from 'react';
import styles from './FormGroup.module.css';

interface FormGroupProps {
    label: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
    defaultValue?: string;
    name?: string;
    value?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({
    label,
    id,
    onChange,
    type = 'text',
    placeholder,
    required = false,
    defaultValue,
    name,
    value,
}) => {
    return (
        <div className={styles.formGroup}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name || id}
                placeholder={placeholder}
                required={required}
                defaultValue={defaultValue}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default FormGroup;
