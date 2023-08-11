const validate = (req, res, next)=>{
    const {title, summary, healtScore, image, steps, diets} = req.body;
    if(!title) return res.status(400).json({error: "Missing title"});
    if(!summary) return res.status(400).json({error: "Missing summary"});
    if(!healtScore) return res.status(400).json({error: "Missing healtScore"});
    if(!image) return res.status(400).json({error: "Missing image"});
    if(!steps) return res.status(400).json({error: "Missing steps"});
    if(!diets) return res.status(400).json({error: "Missing diets"});

    next();
}

module.exports = {validate}