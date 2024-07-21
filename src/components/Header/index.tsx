import cn from './styles.module.scss';
import { ReactComponent as LogoSvg } from './img/logo.svg'

export const Header = () => {
  return (
    <div className={cn.root}>
      <div className={cn.logo}>
        <LogoSvg height="39" width="112" />
      </div>
    </div>
  );
};
