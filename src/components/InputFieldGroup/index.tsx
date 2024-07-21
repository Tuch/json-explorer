import { FC } from 'react';
import cn from './styles.module.scss';

type InputFieldGroupProps = {
  label?: string;
  extra?: string;
  onChange?: (e: string) => void;
  value: string;
};

const noop = () => null;

export const InputFieldGroup: FC<InputFieldGroupProps> = ({ label, extra, value, onChange = noop }) => {
  return (
    <label className={cn.root}>
      {label ? <span className={cn.label}>{label}</span> : null}
      <input 
        type="text" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        className={cn.input} 
      />
      {extra ? <span className={cn.extra}>{extra}</span> : null}
    </label>
  );
}
