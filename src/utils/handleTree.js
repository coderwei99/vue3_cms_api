const handleMenus = arr => {
  const recursion = (parentId = 0) => {
    const result1 = arr.filter(item => item.parentId == parentId);
    return result1.map(item => {
      const { createdAt, updatedAt, RoleMenu, ...res } = item.dataValues;
      return {
        ...res,
        children: recursion(item.id),
      };
    });
  };
  return recursion();
};

module.exports = handleMenus;
