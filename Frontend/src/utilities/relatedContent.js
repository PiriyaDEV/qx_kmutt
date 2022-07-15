export default new (class RelatedContent {
  static RELATED_CATEGORY_SCORE = 5;
  static RELATED_TAG_SCORE = 5;
  static RELATED_AUTHOR_SCORE = 3;

  async calculateScore(current, data) {
    const result = await Promise.all(
      data.map((item) => {
        item.related_score = 0;
        
        if (!!current.categories) {
          const currentIDList = current.categories.map(
            (category) => category.id
          );
          const itemIDList = item.categories.map((category) => category.id);
          const matches = currentIDList.filter((id) => itemIDList.includes(id));
          item.related_score +=
            matches.length * RelatedContent.RELATED_CATEGORY_SCORE;
        }
        if (!!current.tags) {
          const currentIDList = current.tags.map((tag) => tag.id);
          const itemIDList = item.tags.map((tag) => tag.id);
          const matches = currentIDList.filter((id) => itemIDList.includes(id));
          item.related_score +=
            matches.length * RelatedContent.RELATED_TAG_SCORE;
        }
        if (!!current.authors) {
          const currentIDList = current.authors.map((author) => author.id);
          const itemIDList = item.authors.map((author) => author.id);
          const matches = currentIDList.filter((id) => itemIDList.includes(id));
          item.related_score +=
            matches.length * RelatedContent.RELATED_AUTHOR_SCORE;
        }

        return item;
      })
    );

    return result;
  }

  async sortContentByScore(data) {
    const result = data.sort(
      (itemA, itemB) => itemB.related_score - itemA.related_score
    );

    return result;
  }
})();
