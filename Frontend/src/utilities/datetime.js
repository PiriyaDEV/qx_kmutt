import i18n from "i18next";

export default new (class Datetime {
  formatDate(date) {
    const dateObj = new Date(date);
    const locale = i18n.language;
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    return dateObj.toLocaleDateString(locale, options);
  }
})();
