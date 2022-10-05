import React from 'react';
import styles from './ImageSliderStyle';

type Props = {
  visible: boolean;
  length: number;
  currentIdx: number;
  bulletColor: string;
  onClickBullets: (idx: number) => void;
};

const ImageSliderBullets: React.FC<Props> = ({ visible, length, currentIdx, bulletColor, onClickBullets }: Props) => {
  return (
    <>
      {visible && length > 0 && (
        <div style={styles.getBulletContainer(length)}>
          {Array.from(Array(length).keys()).map((idx: number) => (
            <button
              key={`bullet-${idx}`}
              type="button"
              data-id={`bullet-${idx}`}
              style={idx === currentIdx ? { ...styles.BulletActive, background: bulletColor } : styles.BulletNormal}
              onClick={() => onClickBullets(idx)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ImageSliderBullets;
