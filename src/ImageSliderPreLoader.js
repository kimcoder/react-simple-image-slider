const ImageSliderPreLoader = (() => {
    const loadedUrl = {};
    const loadQueue = [];
    const loaderCount = 3;
    const loaderPool = new Array(loaderCount).fill(0).map(e => new Image());

    return {
        load: (url) => {
            if (!url || loadedUrl[url]) {
                return;
            }

            if (loaderPool.length === 0) {
                loadQueue.push(url);
            } else {
                const imageLoader = loaderPool.shift();

                imageLoader.src = url;
                imageLoader.onload = () => {
                    loadedUrl[url] = true;
                    if (loadQueue.length > 0) {
                        imageLoader.src = loadQueue.shift();
                    } else {
                        loaderPool.push(imageLoader);
                    }
                };
            }
        },
    };
})();

export default ImageSliderPreLoader;
