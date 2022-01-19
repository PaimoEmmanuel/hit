
document.addEventListener('DOMContentLoaded', init);

function init(){
    var header = document.querySelector('header');

    document.addEventListener('scroll', ()=>{
        var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
        // console.log(scrollPos);
        

        if(typeof shortHeight !== 'undefined'){
            breakPos = 100
        } else{
            breakPos = 530
        }

        if(scrollPos > breakPos){
            header.classList.add('white');
        }else{
            header.classList.remove('white');
        }
    })
    
}

function openSideMenu(event){
    console.log('opening')
    qs('.side-menu').style.width = "80%"

    event.stopPropagation()
}

function closeSideMenu(){
    qs('.side-menu').style.width = "0"
}