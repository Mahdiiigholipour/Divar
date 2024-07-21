const CategoryMessages = Object.freeze({
  created: "category created successfully",
  notFound: "category not found",
  parentIdProblem:
    "( parent id is empty please insert parent id ) OR ( parent id is not valid objectId please check and send again )",
  emptySlug: "slug field is empty please insert a slug name",
  existSlug: "slug already exist please insert a different name",
});

module.exports = CategoryMessages;
