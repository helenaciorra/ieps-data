import React, { PureComponent } from 'react';
import { Close, ButtonContainer } from './modal.css';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

import '@reach/dialog/styles.css';

// This component is here only to to showcase the
// React Context integration. No need to keep this if
// you don't require a Modal in your project.
export default class Modal extends PureComponent<{
  open: boolean,
  hideModal: () => void,
}> {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = ({ key }) => {
    if (key === 'Escape') {
      this.props.open && this.props.hideModal();
    }
  };

  disableScrolling(open) {
    // Disables scrolling when the modal is open, as suggested by
    // https://www.w3.org/TR/2017/NOTE-wai-aria-practices-1.1-20171214/examples/dialog-modal/dialog.html
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  }

  render() {
    const { children, open, hideModal } = this.props;

    if (typeof document !== 'undefined') {
      this.disableScrolling(open);
    }

    return (
      <>
        {/*  <Button onClick={showModal}>Show Modal</Button> */}

        <Dialog isOpen={open}>
          <ButtonContainer>
            <Close onClick={hideModal}>
              <VisuallyHidden>Close</VisuallyHidden>
              <span aria-hidden>x</span>
            </Close>
          </ButtonContainer>
          {children}
        </Dialog>
      </>
    );
  }
}
