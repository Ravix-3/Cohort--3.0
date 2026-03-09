// class promise{
//   consturctor(fn){
//        this.fn = fn;
//        this.fn();
//   }
//   then(){
//       return this
//   }
//   catch(){
//        return this
//   }
// }

class Promise{
  constructor(fn){
    this.fn = fn;
    this.fn(() =>{
      console.log(this)
      this.sucessCallback();
    },() =>{
      this.errCallback();
    })
  }
  then(s){
    this.sucessCallback = s;
    return this;
  }
  catch(e){
    this.errCallback = e;
  }
}
function setTimeoutPromisifed(delay){
  return new Promise2( resolve => setTimeout(resolve, delay) );
}