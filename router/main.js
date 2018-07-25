module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html')
    });
    app.get('/start',function(req,res){
        res.render('0_start.html');
    });
    app.get('/instance',function(req,res){
        res.render('1_instance.html');
    });
    app.get('/instance_lifecyclehook',function(req,res){
        res.render('2_instance_lifecyclehook.html');
    });
    app.get('/interpolation',function(req,res){
        res.render('3_interpolation.html');
    });//computed

    app.get('/computedVSWatch',function(req,res){
        res.render('4_computed_vs_watch.html');
    });
}