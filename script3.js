const petimg=document.querySelector(".petimg");
const feedimg=document.querySelector(".feedimg");
const bathimg=document.querySelector(".bathimg");
const pet=document.querySelector(".pet");
const bath=document.querySelector(".bath");
const feed=document.querySelector(".feed");
const cat=document.querySelector(".cat");

/*document.addEventListener('mouseenter',()=>{
    petimg.style.display='block';
})
document.addEventListener('mouseleave',()=>{
    petimg.style.display='none';
})*/
pet.addEventListener("click",()=>{
    petimg.style.display='block';
    feedimg.style.display='none';
    bathimg.style.display='none';
    document.addEventListener('mousemove',track1);
    cat.addEventListener('mouseenter',()=>{
        cat.body.style.backgroundImage='url(blush.png)';
    })
    
})
feed.addEventListener("click",()=>{
    feedimg.style.display='block';
    petimg.style.display='none';
    bathimg.style.display='none';
    document.addEventListener('mousemove',track2);
    cat.addEventListener('mouseenter',()=>{
        cat.style.backgroundImage="url('feed.gif')";
    })
})
bath.addEventListener("click",()=>{
    feedimg.style.display='none';
    petimg.style.display='none';
    bathimg.style.display='block';
    document.addEventListener('mousemove',track3);
    cat.addEventListener('mouseenter',()=>{
        cat.style.backgroundImage="url('bath.gif')";
    })
})

function track1(e){
    petimg.style.transform=`translate(${e.clientX-100}px,${e.clientY-500}px)`;
}
function track2(e){
    feedimg.style.transform=`translate(${e.clientX-100}px,${e.clientY-450}px)`;
}
function track3(e){
    bathimg.style.transform=`translate(${e.clientX-100}px,${e.clientY-450}px)`;
}