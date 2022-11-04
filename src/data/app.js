module.exports = {
  environment: process.env.ELEVENTY_ENV,
  now: new Date(),
  data: if(process.env.NODE_ENV === "production") {
      data.date = "git Last Modified";
  }
};
