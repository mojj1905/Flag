const flag=document.getElementById('flag')

for(var i=0; i<flag.offsetWidth;i++){
  var flag_img=document.createElement('div')
  flag_img.className='flag_img'
  flag_img.style.backgroundPosition = -i+'px'
  flag_img.style.animationDelay = i * 10 +'ms'
  flag.append(flag_img)
}


/*window.addEventListener("scroll",()=>{
    let height = document.documentElement.scrollHeight - window.innerHeight
    let position = window.scrollY
    let width = documentElement.scrollWidth
    let bar = position/height*width
    document.getElementById("progress").style.width = bar +"px"
})*/