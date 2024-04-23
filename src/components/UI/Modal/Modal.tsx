import { Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';

interface ModalProps {
  onClose: () => void;
  children: ReactNode | null;
}

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className="backdrop" onClick={onClose} />;
};

const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Fragment>
      {portalElement && ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {portalElement &&
        ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
