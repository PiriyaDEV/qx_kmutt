// Image Utility Functions
export default new (class ImageService {
  // Article cover image url
  getCover(post) {
    const api_url = process.env.REACT_APP_API_URL;
    const upload_url = post.attributes.cover.data.attributes.url;

    return api_url + upload_url;
  }
})();
