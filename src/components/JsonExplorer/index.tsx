import { FC, useState } from 'react';
import { JsonPreview, JsonData } from '../JsonPreview';
import { InputFieldGroup } from '../InputFieldGroup';
import cn from './styles.module.scss';

const path = (keyPath: string[], object: any): any => {
  return keyPath.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, object);
}

const keyPathToArray = (keyPath: string): string[] => {
  const regex = /[^.[\]]+/g;

  return keyPath.match(regex) || [];
};

type JsonExplorerProps = {
  data: JsonData;
};

const JsonExplorer: FC<JsonExplorerProps> = ({ data }) => {
  const [activeItem, setActiveItem] = useState<{ 
    path: string; 
    value: string;
  }>({ path: '', value: ''});

  const handlInputChange = (keyPath: string) => {
    if (!keyPath) {
      setActiveItem({ path: '', value: '' });
    }

    let value = path(keyPathToArray(keyPath), data);

    if (typeof value === 'object') {
      value = undefined
    }

    setActiveItem({ path: keyPath, value: String(value) });
  }

  return (
    <div className={cn.root}>
      <div className={cn.fields}>
        <InputFieldGroup 
          label="Property" 
          value={activeItem.path} 
          extra={activeItem.value} 
          onChange={handlInputChange} 
        />
      </div>
      <JsonPreview 
        data={data} 
        onChange={({ path, value }) => setActiveItem({ path, value: String(value) })} 
      />
    </div>
  );
};

export { JsonExplorer }
