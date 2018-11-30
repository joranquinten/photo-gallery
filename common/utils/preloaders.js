// Takes in a url and a callback function to be executed after loading completes
export const imageLoader = (url, cb) => {
  try {
    const downloadingImage = new Image();
    downloadingImage.src = url;
    downloadingImage.onload = () => cb();
  } catch (error) {
    console.error(error);
    cb();
  }
};
