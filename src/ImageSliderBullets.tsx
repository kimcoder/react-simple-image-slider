import React from 'react';
import styles from './ImageSliderStyle';

type Props = {
  length: number;
  currentIdx: number;
  onClickBullets: (idx: number) => void;
};

const ImageSliderBullets: React.FC<Props> = ({ length, currentIdx, onClickBullets }: Props) => {
  return (
    <div style={styles.getBulletContainer(length)}>
      {Array.from(Array(length).keys()).map((idx: number) => (
        <button
          key={`bullet-${idx}`}
          type="button"
          data-id={`bullet-${idx}`}
          style={idx === currentIdx ? styles.BulletActive : styles.BulletNormal}
          onClick={() => onClickBullets(idx)}
        />
      ))}
    </div>
  );
};

export default ImageSliderBullets;
