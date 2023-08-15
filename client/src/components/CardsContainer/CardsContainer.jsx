import {useSelector} from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";

const CardContainer = ({primerIndice, ultimoIndice})=>{
    
    const prueba = useSelector(state=>state.recipes);
    
    // const prueba = [
    //     {
    //         "id": 782585,
    //         "title": "Cannellini Bean and Asparagus Salad with Mushrooms",
    //         "healthScore": 100,
    //         "image": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
    //         "summary": "Cannellini Bean and Asparagus Salad with Mushrooms requires approximately 45 minutes from start to finish. This main course has 482 calories, 31g of protein, and 6g of fat per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs $1.35 per serving. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe earns a spoonacular score of 70%, which is pretty good. Similar recipes are Cannellini Bean Salad, Refreshing Cannellini Bean Salad, and Cannellini-and-Green Bean Salad.",
    //         "steps": [
    //             "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
    //             "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
    //             "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
    //             "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
    //             "Transfer to the salad bowl.Now cook the mushrooms.",
    //             "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
    //             "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
    //             "Pour the dressing over the salad, season with salt and pepper, and toss.",
    //             "Serve at room temperature or chilled."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 716426,
    //         "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
    //         "healthScore": 75,
    //         "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
    //         "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has 192 calories, 7g of protein, and 6g of fat per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. From preparation to the plate, this recipe takes roughly 30 minutes. Overall, this recipe earns a spectacular spoonacular score of 100%. If you like this recipe, you might also like recipes such as Cauliflower, Brown Rice, and Vegetable Fried Rice, Cauliflower, Brown Rice, and Vegetable Fried Rice, and Cauliflower, Brown Rice, and Vegetable Fried Rice.",
    //         "steps": [
    //             "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\"",
    //             "Heat 1T butter and 1T oil in a large skillet over medium heat.",
    //             "Add garlic and the white and light green pieces of scallion. Sauté about a minute.",
    //             "Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.",
    //             "Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom.",
    //             "Let it sit for about two minutes—so the rice can get toasted and a little crispy.",
    //             "Add the peas and broccoli and stir again.",
    //             "Drizzle soy sauce and toasted sesame oil over rice.Cook for another minute or so and turn off heat.",
    //             "Add chopped scallion tops and toss.I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for added flavor and crunch.Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 715497,
    //         "title": "Berry Banana Breakfast Smoothie",
    //         "healthScore": 64,
    //         "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
    //         "summary": "If you want to add more lacto ovo vegetarian recipes to your recipe box, Berry Banana Breakfast Smoothie might be a recipe you should try. One portion of this dish contains about 21g of protein, 10g of fat, and a total of 457 calories. This recipe serves 1 and costs $2.07 per serving. 689 people have tried and liked this recipe. It works well as a rather inexpensive breakfast. A mixture of banana, graham cracker crumbs, vanilla yogurt, and a handful of other ingredients are all it takes to make this recipe so yummy. From preparation to the plate, this recipe takes roughly 5 minutes. It is brought to you by Pink When. Overall, this recipe earns a super spoonacular score of 99%. Similar recipes include Berry Banana Breakfast Smoothie, Berry Banana Breakfast Smoothie, and Berry Banana Breakfast Smoothie.",
    //         "steps": [
    //             "Take some yogurt in your favorite flavor and add 1 container to your blender.",
    //             "Add in the berries, banana, and soy milk and blend. Top your glass with a few graham cracker crumbs and serve."
    //         ],
    //         "diets": [
    //             "lacto ovo vegetarian"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 715415,
    //         "title": "Red Lentil Soup with Chicken and Turnips",
    //         "healthScore": 100,
    //         "image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
    //         "summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as Red Lentil and Chicken Soup, Red Lentil and Chicken Soup, and Red-Lentil Soup.",
    //         "steps": [
    //             "To a large dutch oven or soup pot, heat the olive oil over medium heat.",
    //             "Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
    //             "Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
    //             "Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
    //             "Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 716406,
    //         "title": "Asparagus and Pea Soup: Real Convenience Food",
    //         "healthScore": 100,
    //         "image": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
    //         "summary": "Asparagus and Pea Soup: Real Convenience Food requires approximately 20 minutes from start to finish. Watching your figure? This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe has 217 calories, 11g of protein, and 8g of fat per serving. This recipe serves 2. For $1.78 per serving, this recipe covers 25% of your daily requirements of vitamins and minerals. Autumn will be even more special with this recipe. It works well as a hor d'oeuvre. 207 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. A mixture of vegetable broth, evoo, garlic, and a handful of other ingredients are all it takes to make this recipe so yummy. All things considered, we decided this recipe deserves a spoonacular score of 96%. This score is outstanding. Try Asparagus and Pea Soup: Real Convenience Food, Asparagus and Pea Soup: Real Convenience Food, and Asparagus and Pea Soup: Real Convenience Food for similar recipes.",
    //         "steps": [
    //             "Chop the garlic and onions.",
    //             "Saute the onions in the EVOO, adding the garlic after a couple of minutes; cook until the onions are translucent.",
    //             "Add the whole bag of asparagus and cover everything with the broth. Season with salt and pepper and a pinch of red pepper flakes, if using.Simmer until the asparagus is bright green and tender (if you've thawed the asparagus it will only take a couple of minutes). Turn off the heat and puree using an immersion blender.",
    //             "Add peas (the heat of the soup will quickly thaw them) and puree until smooth; add more until it reaches the thickness you like.Top with chives and a small dollop of creme fraiche or sour cream or greek yogurt."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "paleolithic",
    //             "lacto ovo vegetarian",
    //             "primal",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 644387,
    //         "title": "Garlicky Kale",
    //         "healthScore": 83,
    //         "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
    //         "summary": "Garlicky Kale requires approximately 45 minutes from start to finish. This side dish has 170 calories, 2g of protein, and 15g of fat per serving. This recipe serves 2. For 69 cents per serving, this recipe covers 17% of your daily requirements of vitamins and minerals. 19 people have made this recipe and would make it again. This recipe from Foodista requires balsamic vinegar, garlic, curly kale, and olive oil. It is a good option if you're following a gluten free, dairy free, paleolithic, and lacto ovo vegetarian diet. With a spoonacular score of 99%, this dish is outstanding. Try Garlicky Kale, Garlicky Kale, and Garlicky Kale for similar recipes.",
    //         "steps": [
    //             "Heat the olive oil in a large pot over medium heat.",
    //             "Add the kale and cover.Stir occasionally until the volume of the kale is reduced by half. Uncover.",
    //             "Add garlic and basalmic.Allow to cook for about another 30 seconds or so, mixing well so that the garlic and vinegar are well distributed.",
    //             "Serve hot."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "paleolithic",
    //             "lacto ovo vegetarian",
    //             "primal",
    //             "whole 30",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 715446,
    //         "title": "Slow Cooker Beef Stew",
    //         "healthScore": 100,
    //         "image": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
    //         "summary": "If you want to add more gluten free and dairy free recipes to your recipe box, Slow Cooker Beef Stew might be a recipe you should try. One serving contains 434 calories, 44g of protein, and 12g of fat. This recipe serves 6. For $2.7 per serving, this recipe covers 45% of your daily requirements of vitamins and minerals. It works best as a main course, and is done in approximately 8 hours and 10 minutes. If you have green onions, carrots, celery, and a few other ingredients on hand, you can make it. This recipe is liked by 57 foodies and cooks. Autumn will be even more special with this recipe. It is brought to you by Pink When. Taking all factors into account, this recipe earns a spoonacular score of 99%, which is awesome. Similar recipes include Slow Cooker Beef Stew, Slow Cooker Beef Stew, and Slow Cooker Beef Stew.",
    //         "steps": [
    //             "To get started, heat your slow cooker to low.",
    //             "Pour in the cream of mushroom soup, Dale's seasoning, water, and beef broth and stir until mixed well.",
    //             "Add in your stew meat, potatoes, onions, carrots, celery, and green onions. Stir well until covered and cook on low for 8 hours. You can add salt and pepper as desired, but the flavors and the Dale's marry together so well that you probably won’t need them."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 782601,
    //         "title": "Red Kidney Bean Jambalaya",
    //         "healthScore": 96,
    //         "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
    //         "summary": "Red Kidney Bean Jambalayan is a main course that serves 6. One portion of this dish contains approximately 18g of protein, 6g of fat, and a total of 393 calories. For $1.68 per serving, this recipe covers 33% of your daily requirements of vitamins and minerals. 53 people were glad they tried this recipe. A mixture of vegetable stock, tomatoes, onion, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. This recipe is typical of Cajun cuisine. It is brought to you by foodandspice.blogspot.com. From preparation to the plate, this recipe takes roughly 45 minutes. Overall, this recipe earns a tremendous spoonacular score of 99%. Users who liked this recipe also liked Red Kidney Bean Jambalaya, Red Kidney Bean Salad, and Red Kidney Bean Curry.",
    //         "steps": [
    //             "Rinse the kidney beans and brown rice separately. Cover the kidney beans with water and soak for 8 hours or overnight. In a separate bowl, cover the brown rice with water and soak for 8 hours or overnight.",
    //             "Drain and rinse the kidney beans, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 hour or until just tender but not falling apart.",
    //             "Drain and set aside.",
    //             "Heat the oil in a large saucepan over medium heat. When hot, add the onion and saut for 5 minutes. Now add the garlic, carrots, celery and green beans, and stir for another 5 minutes. Next add the tomatoes, red pepper, eggplant, sage, thyme, marjoram and celery seed, and continue to stir for another few minutes.",
    //             "Pour in the vegetable stock, liquid smoke, rice and the cooked kidney beans. Bring to a boil, reduce heat to medium low, cover, and cook, stirring occasionally, for 45 minutes or until the rice is tender.",
    //             "Add water as necessary if the stew becomes too dry.Season with sriracha, salt and pepper, and taste for seasoning  add more liquid smoke, sriracha, salt, pepper or herbs as desired."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 795751,
    //         "title": "Chicken Fajita Stuffed Bell Pepper",
    //         "healthScore": 85,
    //         "image": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
    //         "summary": "Chicken Fajita Stuffed Bell Pepper takes approximately 45 minutes from beginning to end. Watching your figure? This gluten free recipe has 526 calories, 50g of protein, and 24g of fat per serving. For $4.35 per serving, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe deserves a spoonacular score of 98%. This score is amazing. Users who liked this recipe also liked Stuffed Bell Peppers, Stuffed Bell Pepper, and Stuffed Bell Pepper.",
    //         "steps": [
    //             "To get started heat oven to 35",
    //             "Mix salt, pepper, cilantro, cumin, chili powder, and quinoa together and place to the side.",
    //             "Cut the bell pepper in half (if you havent already) and clean out the seeds.",
    //             "Layer quinoa and then grilled chicken into the pepper, and then top each with cheese.",
    //             "Place in the oven for about 10 minutes until the bell pepper has softened.Chicken Fajita Stuffed Bell Pepper",
    //             "Top with avocado and serve with shredded lettuce and salsa for a complete meal.This is SO GOOD! I love bell peppers, and I love all of these flavors that are married together that make this chicken fajita stuffed bell pepper so amazing. I could seriously just eat the flavored quinoa all by itself.If you are looking for even more delicious and healthy recipes, make sure you head over to the Simple Fit Forty tab under the cooking section of this blog. We have all of our favorite healthy recipes listed for you right there in one spot. You can also drool over out latest on the Simple Fit Forty Instagram page.If you are looking to get healthy and fit, come and join the super secret and awesome Simple Fit Forty Lifestyle community over on Facebook. We would love to have you join!"
    //         ],
    //         "diets": [
    //             "gluten free"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": 766453,
    //         "title": "Hummus and Za'atar",
    //         "healthScore": 100,
    //         "image": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
    //         "summary": "You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about 34g of protein, 31g of fat, and a total of 778 calories. For $1.61 per serving, this recipe covers 44% of your daily requirements of vitamins and minerals. If you have chickpeas, olive oil, sea salt, and a few other ingredients on hand, you can make it. It works best as a marinade, and is done in about 45 minutes. It is a good option if you're following a gluten free, dairy free, lacto ovo vegetarian, and vegan diet. 35 people have made this recipe and would make it again. It is brought to you by foodandspice.blogspot.com. Overall, this recipe earns a great spoonacular score of 98%. Chopped Hummus Dip with Za'atar, Mediterranean Hummus Toast with Za’atar, and Hummus Deviled Eggs with Za’atar {Exercise Challenge} are very similar to this recipe.",
    //         "steps": [
    //             "Rinse the chickpeas and soak for 8 hours or overnight in several inches of water.",
    //             "Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Bring to a boil, reduce heat to medium-low, cover, and simmer for 1 to 1 1/2 hours or until soft.",
    //             "Drain, reserving the cooking liquid. (If using canned chickpeas, rinse thoroughly.)Meanwhile, toast the pine nuts in a dry unoiled skillet or saucepan over medium-low heat, tossing or stirring frequently, for 10 minutes or until lightly browned.",
    //             "Transfer the chickpeas to a food processor and add the pine nuts, 2 tablespoons of olive oil, 1/4 cup of the reserved chickpea cooking liquid (or water if using canned chicpeas), the tahini, garlic, lemon juice and salt. Process until smooth, adding more of the reserved chickpea cooking liquid or water as necessary to reach a light creamy consistency. Taste for seasoning and add more salt or lemon juice as desired.",
    //             "Transfer the hummus to a shallow bowl and drizzle with olive oil.",
    //             "Sprinkle with za'atar and paprika, and serve with chopped fresh vegetables or toasted pita triangles.Refrigerate leftover hummus for a few days or freeze for up to a month."
    //         ],
    //         "diets": [
    //             "gluten free",
    //             "dairy free",
    //             "lacto ovo vegetarian",
    //             "vegan"
    //         ],
    //         "created": false
    //     },
    //     {
    //         "id": "e30cb441-2154-4751-9ed4-449b829302e8",
    //         "title": "cachapaaaa",
    //         "healthScore": 65,
    //         "image": "https://st3.depositphotos.com/19385144/36777/i/600/depositphotos_367770826-stock-photo-cachapa-typical-food-from-venezuela.jpg",
    //         "summary": "quesoooo y  de maiz pilado ",
    //         "steps": {
    //             "1": "echar leche",
    //             "2": "echar harina",
    //             "3": "mezclar",
    //             "4": "darle forma",
    //             "5": "cocinar"
    //         },
    //         "diets": [
    //             "vegan",
    //             "primal"
    //         ],
    //         "created": true
    //     },
    //     {
    //         "id": "2d7f149c-db78-4dad-b886-846f5537122c",
    //         "title": "arroz",
    //         "healthScore": 65,
    //         "image": "https://st3.depositphotos.com/19385144/36777/i/600/depositphotos_367770826-stock-photo-cachapa-typical-food-from-venezuela.jpg",
    //         "summary": "quesoooo y  de maiz pilado ",
    //         "steps": {
    //             "1": "echar leche",
    //             "2": "echar harina",
    //             "3": "mezclar",
    //             "4": "darle forma",
    //             "5": "cocinar"
    //         },
    //         "diets": [
    //             ""
    //         ],
    //         "created": true
    //     }
    // ]
    if(typeof(prueba) === 'string'){
        return (
            <div>
                <h4>{prueba}</h4>
            </div>
        )
    }else{

    return (
        
        <div  className={style.container}>
            {prueba.map(recipe=>{
                return <Card key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    // summary={recipe.summary}
                    healthScore={recipe.healthScore}
                    // steps={recipe.steps}
                    diets={recipe.diets}
                    image={recipe.image}
                    // created={recipe.created}
                />

            }).slice(primerIndice, ultimoIndice)}
        </div>
    //     
    )}
};

export default CardContainer;