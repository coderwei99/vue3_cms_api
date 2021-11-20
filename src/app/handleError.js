module.exports = (err, ctx) => {
  console.log("eroor");
  let status;
  switch (err.code) {
    case "10007":
      status = 400;
      break;
    case "10002":
      status = 409;
    default:
      status = 500;
  }
  ctx.status = status;
  console.log(err, "app/handleError.js");
  ctx.body = err;
};
