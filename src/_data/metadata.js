module.exports = async function () {
  site =
    process.env.CONTEXT === "deploy-preview"
      ? process.env.DEPLOY_PRIME_URL
      : process.env.URL;

  return {
    title: "DIO Fest LNK",
    url: "https://diolnk.com/",
    baseurl: site,
    description:
      'Do It Ourselves Fest is a one-day event in Lincoln, Nebraska, celebrating DIY culture, art, music, and mutual aid.',
    social_description: "Do It Ourselves Fest is a one-day event in Lincoln, Nebraska, celebrating DIY culture, art, music, and mutual aid.",
  };
};
