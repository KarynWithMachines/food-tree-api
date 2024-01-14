const sharp = require("sharp");
//package for processing images

//resize thumbnail
const modify_thumbnail = async (thumbnail) => {
  try {
    const resized_thumbnail = await sharp(thumbnail).resize({
      height: 100,
      width: 100,
      background: { r: 171, g: 149, b: 144 },
      fit: inside,
    });

    return resized_thumbnail;
  } catch (error) {
    return error;
  }
};

module.exports = { "modify-thumbnails": modify_thumbnail };
