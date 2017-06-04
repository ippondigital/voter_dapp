module.exports = function(app){  
    
    var index = require('../controllers/index/index.js');
    var dashboard = require('../controllers/dashboard/dashboard.js');
    
    //index
    app.get('/', index.start);
    app.post('/', index.createContract);
    //dashboard
    app.get('/dashboard', dashboard.show);
    app.post('/dashboard', dashboard.add);   
    
}


