const db = require("../db/db-config.js");

const display_tree = async (id) => {
  try {
    const get_tree_details = await db.oneOrNone("SELECT * FROM account WHERE id=$1",id);

    return get_tree_details;

  } catch (error) {
    return error;
  }
};

const view_recipe = async (id) => {
  try {
    const get_recipe_details = await db.oneOrNone("SELECT * FROM recipe WHERE id=$1",id);
    
    return get_recipe_details;

  } catch (error) {
    return error;
  }
};
module.exports = { view_tree, view_recipe };
