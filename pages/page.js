var shut = false;

var template = function(name, body) {
  document.body.innerHTML = '<head><title>'+ name +' - ScratchRemix</title><link rel="stylesheet" href="pages/page.css"></head><body><div class="dash">&nbsp; <b>ScratchRemix</b>&nbsp;&nbsp;&nbsp; <a href="https://scratchremix.github.io/">Home</a> <button class="dropbtn">Links</button> <div class="dropdown-content" style="left:0;"> <a href="AssetLoader">Asset Loader</a> <a href="https://github.com/ScratchRemix/ScratchRemix.github.io" target="_newtab">Source Code</a> <a href="https://scratch.mit.edu/users/danielthebanana4" target="_newtab" class="b">@danielthebanana4</a></div><span class="dash">&nbsp;</span> <a class="white" href="https://github.com/Daniel4-Scratch" target="_blank">Daniel4-Scratch</a> <div class="f"> <a class="white" style="float:right;" href="https://github.com/scratchremix" target="_blank">Github</a><span style="float:right;">&nbsp</span></div></div><div class="te">'+
  body + '</div></body>';
  
  if (shut) {
   document.body.innerHTML = '';
  }
};
/*
<div class="dash">&nbsp; <b>Cope</b>&nbsp;&nbsp;&nbsp; 
<a href="https://scratchremix.github.io/">Home</a> 
<button class="dropbtn">Links</button>
 <div class="dropdown-content" style="left:0;">
 <a href="AssetLoader">Asset Loader</a>
 <a href="https://github.com/ScratchRemix/ScratchRemix.github.io" target="_newtab">Source Code</a>
 <a href="https://scratch.mit.edu/users/danielthebanana4" target="_newtab" class="b">@danielthebanana4</a> </div> </div>


<span class="dash">&nbsp;</span>
<a class="white" href="https://github.com/Daniel4-Scratch" target="_blank">Daniel4-Scratch</a>

<div class="f">
<a class="white" style="float:right;" href="https://github.com/scratchremix" target="_blank">Github</a>
  <span style="float:right;">&nbsp</span>
 

</div>
</div>
*/
