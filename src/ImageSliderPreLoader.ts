const ImageSliderPreLoader = (() => {
  const loadedUrl: { [key: string]: boolean } = {};
  const loadQueue: Array<string> = [];
  const loaderCount = 3;
  let loaderPool: Array<HTMLImageElement>;

  const init = () => {
    if (typeof Image !== 'function') return;

    loaderPool = new Array(loaderCount).fill(0).map(() => new Image());
  };

  init();
  return {
    load: (url: string) => {
      if (!loaderPool) {
        init();
        return;
      }

      if (!url || loadedUrl[url]) {
        return;
      }

      if (loaderPool.length === 0) {
        loadQueue.push(url);
      } else {
        const imageLoader: HTMLImageElement = loaderPool.shift() as HTMLImageElement;

        imageLoader.src = url;
        imageLoader.onload = () => {
          loadedUrl[url] = true;
          if (loadQueue.length > 0) {
            imageLoader.src = loadQueue.shift() as string;
          } else {
            loaderPool.push(imageLoader);
          }
        };
      }
    }
  };
})();

export default ImageSliderPreLoader;
