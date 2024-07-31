class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    show(req, res) {
        console.log('show method called with slug:', req.params.slug); // Debug log
        res.send('NEWS DETAILS!!!');
    }
}

module.exports = new NewsController();
