import React, { FC, ReactElement, useEffect, useState } from 'react';
import * as S from './Clipboard.css';

type Props = {
  copyValue: string,
  successMessage?: string,
  errorMessage?: string,
  children: ReactElement | ReactElement[] | string | number,
};

let timer;

const Clipboard: FC<Props> = ({
  copyValue,
  successMessage = 'Copiado',
  errorMessage = 'Erro ao copiar valor',
  children,
}: Props) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleClipboardUrl = async () => {
    setShowFeedback(true);
    if (
      !navigator ||
      !navigator?.clipboard ||
      !navigator?.clipboard?.writeText
    ) {
      setFeedbackMessage(errorMessage);
      setSuccess(false);
      setError(true);
      return;
    }

    try {
      await navigator.clipboard.writeText(copyValue);

      setFeedbackMessage(successMessage);
      setSuccess(true);
      setError(false);
    } catch (error) {
      setFeedbackMessage(errorMessage);
      setSuccess(false);
      setError(true);
    }

    timer = setTimeout(() => {
      setShowFeedback(false);
      setSuccess(false);
      setError(false);
      setFeedbackMessage('');
    }, 5000);
  };

  return (
    <S.Clipboard onClick={handleClipboardUrl}>
      {showFeedback && (
        <S.Message success={success} error={error}>
          {feedbackMessage}
        </S.Message>
      )}
      <S.Children>{children}</S.Children>
    </S.Clipboard>
  );
};

export default Clipboard;
