import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import css from './Fallback.module.css';
export const Fallback = () => (
  <div className={css.Fallback}>
    <Loader type="Circles" color="black" height={80} width={80} />
  </div>
);
