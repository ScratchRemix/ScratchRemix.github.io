var shut = false;

var template = function(name, body) {
  document.body.innerHTML = '<head><title>'+ name +' - ScratchRemix</title><link rel="stylesheet" href="pages/page.css"></head><body><div class="dash">&nbsp; <b>ScratchRemix</b>&nbsp;&nbsp;&nbsp; <a href="https://scratchremix.github.io/">Home</a> <div class="dropdown" style=""> <button class="dropbtn">Links</button> <div class="dropdown-content" style="left:0;"> <a href="AssetLoader">Asset Loader</a> <a href="https://github.com/ScratchRemix/">Github</a> <a href="https://github.com/Daniel4-Scratch" class="b">Daniel4-Scratch</a> </div> </div> <span class="dash">&nbsp;</span> <div class="f"> <a class="white" style="float:right;" href="https://github.com/scratchremix" target="_blank">Github</a> <span style="float:right;">&nbsp</span> </div> </div><div class="te">'+
  body + '</div></body>';
  
  if (shut) {
   document.body.innerHTML = '<head><title>'+ name +' - Cope</title><link rel="stylesheet" href="other/page.css"></head><body><div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; <a href="https://dpla-s.github.io/">Home</a> <a href="https://dpla-s.github.io/Cope-DPLA">About</a> <span class="dash">&nbsp;</span> <a class="white" href="#">Download</a> <div class="f"> <a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a> <span style="float:right;">&nbsp</span> </div> </div> Error</body>';
  }
};
/*
<div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; 
<a href="https://dpla-s.github.io/">Home</a> 
<a href="https://dpla-s.github.io/Cope-DPLA">About</a> <span class="dash">&nbsp;</span>
<a class="white" href="#">Download</a>
<div class="f">
<a class="white" style="float:right;" href="https://github.com/DPLA-S" target="_blank">Github</a>
  <span style="float:right;">&nbsp</span>
</div>
</div>
*/
