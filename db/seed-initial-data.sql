\c foodtree; 

--seed data for dev account food tree--
INSERT INTO account (email, username, password, thumbnail, bio, instagram_link, facebook_link, tiktok_link,  x_link )
VALUES('karynhuston434@gmail.com', 
'karyn.dev',
'0%4$23_97', 
'https://dummyimage.com/600x400/000/fff', 
'devs favorites', 
'https://www.instagram.com/',
'https://www.facebook.com/', 
'https://www.tiktok.com/en/', 
'https://twitter.com/?lang=en');


INSERT INTO recipe (thumbnail, recipe_name, recipe_description, body, ingredients, tools, link)
VALUES('https://dummyimage.com/600x400/000/fff', 
'lemon lamb chops',
'lamb chops pre soaked in lemon with rosemary.', 
'Start with washing lamb chops in cold water and season. After squeeze 2 fresh lemons onto the lamb. Make sure they are soaked. Next add herbed rosemary. Leave over night. When ready preheat over to 350 and place lamb chops in the oven and cook for 40 minutes. Enjoy!', 
'Lamb chops. Lolli pop lambs. 2-3 Lemons or lemon juice.Fresh rosemary or dried',
 'air fryer(optional)', 
'https://www.amazon.com/Lamb-Co-Fresh-Zealand-Chops/dp/B088Y56ZWL/ref=sr_1_1_f3_0o_fs_sspa?keywords=lamb+chops&qid=1704174091&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1');