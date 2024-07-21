import { FC, ReactElement } from 'react';
import classNames from 'classnames';
import cn from './styles.module.scss';

export type JsonData = {
  [key: string]: JsonValue;
};

type JsonValue = string | number | boolean | JsonData | JsonValue[];
type PathType = string;
type ValueType = string | number | boolean | null;

type JsonPreviewProps = {
  data: JsonData;
  onChange: (arg0: { path: PathType, value: ValueType }) => void;
};

export const JsonPreview: FC<JsonPreviewProps> = ({ data, onChange }) => {
  const handleKeyClick = (path: string, value: JsonValue) => {
    if (typeof value === 'object' && value !== null) {
      return; 
    }
    
    onChange({ path, value: value });
  };

  const renderJson = (data: JsonValue, path: string = '', withComma = false): ReactElement => {
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
      return (
        <div className={cn.jsonContainer}>
          {'{'}
          <div className={cn.objectBody}>
            {Object.keys(data).map((key, index, array) => (
              <div key={key}>
                <span
                  onClick={() => handleKeyClick(`${path}.${key}`, data[key])}
                  className={classNames({ [cn.key]: typeof data[key] !== 'object' })}
                >
                  {key}
                </span>
                : {renderJson(data[key], path ? `${path}.${key}` : key)}
                {index < array.length - 1 ? ',' : ''}
              </div>
            ))}
          </div>
          {'}'}{withComma ? ',' : null}
        </div>
      );
    } else if (Array.isArray(data)) {
      return (
        <div className={cn.jsonContainer}>
          [
          {data.map((item, index) => (
            <div key={index}>
              {renderJson(item, `${path}[${index}]`, index < data.length - 1)}
            </div>
          ))}
          ]
        </div>
      );
    } else if (typeof data === 'string') {
      return <span>"{data}"</span>;
    } else {
      return (
        <span>
          {String(data)}
        </span>
      );
    }
  };

  return <div className={cn.root}>{renderJson(data)}</div>;
};
