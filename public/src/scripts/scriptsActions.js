/*var textoHoverBox = document.getElementsById("efeito-hover");

textoHoverBox.addEventListener("mousehover", function()
{
    if(textoHoverBox.style.display === "none")
    {
        textoHoverBox.style.display = "block";
    }else{
        textoHoverBox.style.display = "none"
    }
});
*/

function mudaFotoTopo(numero)
{
    var fotoTopo = document.getElementById("foto_topo");
    
    
      /*"public\images\Vinhos-para-casamento-1180x517-o4tcpp4ey3g9fhsmzlxgjnyye63xpsmof9hlxwpl88.png"*/
  
    if(numero === 1)
    {
        fotoTopo.src = "../../images/Como-se-Legalizar-nos-EUA-Big-2.jpg";
    }else if(numero === 2)
    {
        fotoTopo.src = "../../images/Vinhos-para-casamento-1180x517-o4tcpp4ey3g9fhsmzlxgjnyye63xpsmof9hlxwpl88.png";
    }else
    {
        fotoTopo.src = "../../images/dicas-de-decoração-para-casamento-1024x300.jpg"
    }
}