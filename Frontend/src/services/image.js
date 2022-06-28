// Image Utility Functions
export default new (class ImageService {
  // Article cover image url
  getCover(post) {
    const api_url = process.env.REACT_APP_API_URL;
    const upload_url = post.attributes.cover.data.attributes.url;

    return "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAYW9WT.img?h=1080&w=1920&m=6&q=60&o=f&l=f&x=800&y=489";
  }
})();
