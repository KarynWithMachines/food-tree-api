const db = require("../db/db-config.js");
const modify_thumbnail = require("../utilities/modify-thumbnails.js");

/**sql queries
 * SELECT
 * display profile dashboard
 * view account details
 *
 *
 * INSERT
 * create new account
 * create a recipe
 *
 *
 * UPDATE
 * update recipe
 * account settings, username...
 *
 *
 * DELETE
 * delete recipe
 * delete account
 */

const display_dashboard = async (id) => {
  try {
    const get_dashboard = await db.oneOrNone(
      "SELECT * FROM account WHERE id=$1",
      id
    );
    return get_dashboard;
  } catch (error) {
    return error;
  }
};

const display_recipe = async (id) => {
  try {
    const get_recipe = await db.oneOrNone(
      "SELECT * FROM recipe WHERE id=$1",
      id
    );
    return get_recipe;
  } catch (error) {
    return error;
  }
};

const new_account = async (account) => {
  const {
    email,
    username,
    password,
    thumbnail,
    bio,
    instagram_link,
    facebook_link,
    tiktok_link,
    x_link,
  } = account;

  try {
    const account_details = await db.one(
      "INSERT INTO account (email, username, password, thumbnail, bio, instagram_link, facebook_link, tiktok_link, x_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        email,
        username,
        password,
        thumbnail
          ? await modify_thumbnail(thumbnail)
          : "https://dummyimage.com/100x100/9e9e9e/fcfcfc.jpg&text=no+thumbnail",
        bio,
        instagram_link,
        facebook_link,
        tiktok_link,
        x_link,
      ]
    );
    return account_details;
  } catch (error) {
    console.error("error inserting new account", error);
    throw error;
  }
};

const new_recipe = async (recipe) => {
  const {
    thumbnail,
    recipe_name,
    recipe_description,
    body,
    ingredients,
    tools,
    link,
  } = recipe;

  try {
    const recipe_details = await db.one(
      " INSERT INTO recipe (thumbnail, recipe_name, recipe_description, body, ingredients, tools, link) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        thumbnail
          ? modify_thumbnail(thumbnail)
          : "https://dummyimage.com/100x100/9e9e9e/fcfcfc.jpg&text=no+thumbnail",
        recipe_name,
        recipe_description,
        body,
        ingredients,
        tools,
        link,
      ]
    );
    return recipe_details;
  } catch (error) {
    console.error("error inserting recipe", error);
    throw error;
  }
};

const update_recipe = async (id, recipe) => {
  const {
    thumbnail,
    recipe_name,
    recipe_description,
    body,
    ingredients,
    tools,
    link,
  } = recipe;

  try {
    const updated_recipe = await db.one(
      "UPDATE recipe SET thumbnail=$1, recipe_name=$2, recipe_description=$3, body=$4, ingredients=$5, tools=$6, link=$7 WHERE id=$8 RETURNING *",
      [
        thumbnail ? modify_thumbnail(thumbnail) : thumbnail,
        recipe_name,
        recipe_description,
        body,
        ingredients,
        tools,
        link,
        id,
      ]
    );
    return updated_recipe;
  } catch (error) {
    return error;
  }
};

const update_account = async (id, account) => {
  const {
    email,
    username,
    password,
    thumbnail,
    bio,
    instagram_link,
    facebook_link,
    tiktok_link,
    x_link,
  } = account;

  try {
    const updated_account_details = await db.one(
      "UPDATE account SET email=$1, username=$2, password=$3, thumbnail=$4. bio=$5, instagram_link=$6, facebook_link=$7, tiktok_link=$8, x_link=$9, WHERE id=$10 RETURNING *",
      [
        email,
        username,
        password,
        thumbnail,
        bio,
        instagram_link,
        facebook_link,
        tiktok_link,
        x_link,
        id,
      ]
    );
    return updated_account_details;
  } catch (error) {
    return error;
  }
};

const delete_recipe = async (id) => {
  try {
    const deleted_recipe = await db.one(
      "DELETE FROM recipe WHERE id=$1 RETURNING *",
      id
    );

    return delete_recipe;
  } catch (error) {
    return error;
  }
};

const deactivate_account = async (id) => {
  try {
    const deactivated = await db.one(
      "DELETE FROM account WHERE id=$1 RETURNING *",
      id
    );
    return deactivated;
  } catch (error) {
    return error;
  }
};

module.exports = {
  display_dashboard,
  display_recipe,
  new_account,
  new_recipe,
  update_recipe,
  update_account,
  delete_recipe,
  deactivate_account,
};
