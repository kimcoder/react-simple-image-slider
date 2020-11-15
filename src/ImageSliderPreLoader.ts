const ImageSliderPreLoader = (() => {
  const loadedUrl: { [key: string]: boolean } = {};
  const loadQueue: Array<string> = [];
  const loaderCount = 3;
  const loaderPool: Array<HTMLImageElement> = new Array(loaderCount).fill(0).map(() => new Image());

  return {
    load: (url: string) => {
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
