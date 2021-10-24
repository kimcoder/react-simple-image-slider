import { useEffect, useRef, useState } from 'react';

type UseSlideIndexParam = {
  imageCount: number;
  startIndex: number;
  autoPlay: boolean;
  autoPlayDelay: number;
};

type UseSlideIndexValue = {
  slideIdx: number;
  updateSlideIdx: (idx: number) => void;
  getNextLoopingIdx: (idx: number) => number;
  isRightDirection: boolean;
  previousSlideIdx: number;
};

const useSlideIndex = ({ startIndex, imageCount, autoPlay, autoPlayDelay }: UseSlideIndexParam): UseSlideIndexValue => {
  const [slideIdx, setSlideIdx] = useState(startIndex < imageCount ? startIndex : 0);
  const isRightDirectionRef = useRef(true);
  const previousSlideIdxRef = useRef(slideIdx);
  const autoPlayTimerRef = useRef<number | null>(null);

  const setAutoPlayTimeout = (idx: number) => {
    if (!autoPlay || autoPlayTimerRef.current) {
      return;
    }
    autoPlayTimerRef.current = setTimeout(() => {
      updateSlideIdx(idx);
    }, autoPlayDelay * 1000);
  };

  const removeAutoPlayTimeout = () => {
    if (autoPlayTimerRef.current !== null) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  const getNextLoopingIdx = (idx: number) => {
    if (idx >= imageCount) {
      return 0;
    } else if (idx < 0) {
      return imageCount - 1;
    }

    return idx;
  };

  const updateSlideIdx = (idx: number) => {
    isRightDirectionRef.current = idx > slideIdx;
    previousSlideIdxRef.current = slideIdx;
    setSlideIdx(getNextLoopingIdx(idx));
  };

  useEffect(() => {
    removeAutoPlayTimeout();
    setAutoPlayTimeout(slideIdx + 1);
    return removeAutoPlayTimeout;
  }, [slideIdx]);

  return {
    slideIdx,
    updateSlideIdx,
    getNextLoopingIdx,
    isRightDirection: isRightDirectionRef.current,
    previousSlideIdx: previousSlideIdxRef.current
  };
};

export default useSlideIndex;
