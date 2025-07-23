import { FC } from 'react';
import css from './BookModal.module.css';

interface IProps {
  cb: () => void;
  closeCaption: string;
}

const BookModal: FC<IProps> = ({ cb, closeCaption }) => {
  return (
    <div className={css.wrapper}>
      <div onClick={cb} className={css.close}>
        {closeCaption}
      </div>
      <iframe className={css.iframe} src="https://b808281.alteg.io/company/759491/personal/select-master?o="></iframe>
    </div>
  );
};

export default BookModal;