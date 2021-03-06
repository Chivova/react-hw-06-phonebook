import PropTypes from 'prop-types';
import s from './Container.module.css';

export default function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.protoType = {
  children: PropTypes.node.isRequired,
};
