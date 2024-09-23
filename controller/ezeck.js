const ph = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    services: (req, res) => {
        res.render('services');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    appointment: (req, res) => {
        res.render('appointment');
    },
    features: (req, res) => {
        res.render('features');
    },
    project: (req, res) => {
        res.render('project');
    },
    member: (req, res) => {
        res.render('member');
    },
    testemonial: (req, res) => {
        res.render('testemonial');
    },
    404: (req, res) => {
        res.render('404');
    }
};
module.exports = ph;
