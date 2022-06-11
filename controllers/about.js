


function about(req, res){
     res.render('orders/about',  {
          title: 'Welcome to PicoMe',
        
          // groceries: groceries,
     })
      
     
}

module.exports = {
	about
};