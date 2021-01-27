const axios = require("axios");

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }, pluginOptions) => {
  const { createNode } = actions;

  if(!pluginOptions.username) {
    console.error("Username is mandatory in plugin options");
    return
  }

  const path = `https://gitconnected.com/v1/portfolio/${pluginOptions.username}`;

  try {
    const {data} = await axios.get(path);
    createNode({
      ...data,
      id: createNodeId(`PORTFOLIO-${pluginOptions.username}`),
      parent: null,
      children: [],
      internal: {
        type: "PORTFOLIO",
        content: JSON.stringify(data),
        contentDigest: createContentDigest(JSON.stringify(data)),
      },
    });
    return;
  } catch (err) {
    console.error(err);
    return;
  }
};