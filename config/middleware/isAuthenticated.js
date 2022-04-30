module.exports = function (req, res, next) {
    if (req.user) {
        return next();
    }

    console.log("failed to sign in");
    return res.redirect("/");
};
