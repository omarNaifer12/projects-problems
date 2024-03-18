
function MakeAccount(initial) {
  
   var makeAccount={}
   makeAccount.value=initial
   makeAccount.withdraw=width(amount)
   makeAccount.deposit=dep(amount)
     return makeAccount
         }              
  function width(amount) {
    if (this.balance - amount >= 0) {
        this. balance = this.balance - amount;
        return 'Here is your money: $' + amount;
    }
}
function dep(amount) {
    this.balance = this.balance+amount;
    return 'Your balance is: $' + balance;
}

function makeStopwatch(name) {
    var End;
    
    var MakeStopwatch = {};
MakeStopwatch.Name=name
    MakeStopwatch.end = End;
    MakeStopwatch.time = 0;
    MakeStopwatch.Start = start;
    MakeStopwatch.Stop = stops;
    MakeStopwatch.reset = reset;

    return MakeStopwatch;
}

var start = function() {
   var self=this
   var second=0
   var minute=0
    this.end = setInterval(function() {
        self.time += 1;
        
            console.log('Elapsed time: ' +Math.floor( self.time/60)+'m'+' '+self.time%60+ 's.'+'('+ self.Name+')');
            second++
    }, 1000);
};

var stops = function() {
    clearInterval(this.end);
};

var reset = function() {
    clearInterval(this.end);
    this.time = 0;
};
var lap=function(){
if(this.time!==0)
    console.log("Adding lap @: "+this.time+"s"+" "+this.Name)
else 
console.log('No laps.')
}
var h=makeStopwatch()
h.Start()
h.Stop()
function Toaster() {
    var End
   var instance={}
   instance.end=End
instance.Toast=undefined
instance.AddToast=addToast
instance.Eject=eject
instance.Startt=starts
instance.Stop=stop
    return instance;
}
var addToast=function(toast)
{
this.Toast=toast
};
eject=function(){
    return this.Toast
};
var starts=function (){
    var pos=this
  this.end=  setTimeout(function(){
    if(pos.Toast===undefined)
    console.log("toast needs to be added before it can be toasted")
else 
{console.log("the time that the toast is being 'toasted': "+pos.Toast)
pos.Toast=pos.Toast+'(toasted)'    
}
},1000)
}
var stop=function(){
    clearTimeout(this.end)
}
var check= Toaster()
check.AddToast("NAIFER")
check.Startt()
check.Stop()