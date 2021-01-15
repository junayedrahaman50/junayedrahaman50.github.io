document.addEventListener("mouseleave", function(e){
    if( e.clientY < 0 )
    {
//         alert("Hey don't leave. I have an free eBook for you");
        $('#exampleModalCenter').modal("show");
    }
}, false);