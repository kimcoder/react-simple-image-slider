declare type UseSlideIndexParam = {
    imageCount: number;
    startIndex: number;
    autoPlay: boolean;
    autoPlayDelay: number;
};
declare type UseSlideIndexValue = {
    slideIdx: number;
    updateSlideIdx: (idx: number) => void;
    getNextLoopingIdx: (idx: number) => number;
    isRightDirection: boolean;
    previousSlideIdx: number;
};
declare const useSlideIndex: ({ startIndex, imageCount, autoPlay, autoPlayDelay }: UseSlideIndexParam) => UseSlideIndexValue;
export default useSlideIndex;
