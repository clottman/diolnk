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
 //    favicon: "/img/favicon.ico",
  /*  social_image: social_image,
    social_image_alt: "cassey.dev",
    social_image_height: 900,
    social_image_width: 1600, 
    twitter_card_style: "summary_large_image", */
  };
};
