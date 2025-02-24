import React, { FC, useEffect, useState } from 'react';
import * as S from './ContextMessge.css';

type Position = { x: number, y: number };

type Props = {
  message: string,
  position: Position,
  hide: boolean,
};

const ContextMessage: FC<Props> = ({
  message,
  position,
  hide = false,
}: Props) => {
  const [messagePosition, setMessagePosition] = useState<Position>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setMessagePosition({ x: position.x, y: position.y });
  }, [position]);

  return (
    <S.Container position={messagePosition} hide={hide}>
      <S.Text>{message}</S.Text>
    </S.Container>
  );
};

export default ContextMessage;
