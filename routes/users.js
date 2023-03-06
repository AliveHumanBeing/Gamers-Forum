let mongoose=require('mongoose');

let userSchema=mongoose.Schema({
  GameName: String,
  review: String
});
module.exports=mongoose.model('user',userSchema);
mongoose.connect('mongodb+srv://samairasethi15:cBg9U1Ucw4t0MTHz@cluster0.1rwt8pf.mongodb.net/?retryWrites=true&w=majority')
.then(function(){
  console.log|('Database Connected')
})
.catch(function(){
  console.log(e)
})
