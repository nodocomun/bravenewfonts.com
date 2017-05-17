$(window).scroll(function() {
       var headerH = $('.header').outerHeight(true);
      //this will calculate header's full height, with borders, margins, paddings
       var scrollVal = $(this).scrollTop();
        if ( scrollVal > headerH ) {
        //when scroll value reach to your selector
            $('#content').css({'position':'fixed','top' :'0px'});
        } else {
            $('#content').css({'position':'static','top':'0px'});
        }
});




$(".contentContainer").css("display","none");
$("#homeContainer").css("display","inline");
$(".imageContainer").css("display","none");
$(".menu-item").click(function(e)
{

    $(".contentContainer").css("display","none");
    $(".menu-item").css("text-decoration","none");
    $(event.target).css("text-decoration","line-through");
    $("html, body").animate({ scrollLeft: 0 }, "fast");
    $("body").css("background-color","white");
    $("body").css("width","100px");
    $("body").css("height","auto");

    if(e.target.id == "kollektif")
    {
        $("#kollektifContent").css("display","inline");
        $("body").css("width","12700px");
    }
    else if(e.target.id == "type02")
    {   
        $("#type02Content").css("display","inline");
        $("body").css("width","12050px");
    }
    else if(e.target.id == "type03")
    {
        $("#type03Content").css("display","inline");
        $("body").css("width","10300px");
    }
    else if(e.target.id == "fivepixel")
    {
        $("#fivepixelContent").css("display","inline")
        $("body").css("width","9120px");
        $("body").css("height","2400px");
    }
    else if(e.target.id == "joinus")
    {
        $("#joinusContent").css("display","inline")
        $("body").css("width","auto");
    }
    else if(e.target.id == "links")
    {
        $("#linksContent").css("display","inline")
        $("body").css("width","auto");
    }
    else if(e.target.id == "shop")
    {
        $("#shopContent").css("display","inline")
        $("body").css("width","2400px");
    }

});



$(".menu-item2").click(function(e)
{

    if(e.target.id == "fb")
    {
        window.open('https://www.facebook.com/bnftypefoundry','_blank');
    }
    else if(e.target.id == "at")
    {
        window.open('mailto:info@bravenewfonts?Subject=Hey','_blank');
    }
    else if(e.target.id == "inst")
    {
        window.open('https://instagram.com/bravenewfonts','_blank');
    }



});

$("#logo").click(function(e)
{
    $(".contentContainer").css("display","none");
    $("html, body").animate({ scrollLeft: 0 }, "fast");
    $("#homeContainer").css("display","inline");
    $("body").css("width","auto");
    $(".menu-item").css("text-decoration","none");

});

    


$(document).on('mousemove', function(e){
    $("#infoBox").css({
       left:  event.clientX+15,
       top:   event.clientY+15
    });

});




$(".drag").draggable();

$("body").mousewheel(function(event, delta) 
{
            this.scrollLeft -= (delta * 30);
        event.preventDefault();
});




var currentLength = 1;
var tryText = $("#tryKollektif-01").text();
var animation01 = setInterval(function()
{

    

    if($("#tryKollektif-01").text() != "")
    {
        $("#tryKollektif-01").text(tryText.substr(0, currentLength));
        currentLength++;
        if(currentLength == tryText.length+1)
        {
            currentLength = 1;
        }
    }
    
}, 200);




var currentLength2 = 1;
var tryText = $("#tryKollektif-02").text();
var animation02 = setInterval(function()
{

    

    if($("#tryKollektif-02").text() != "")
    {
        $("#tryKollektif-02").text(tryText.substr(0, currentLength2));
        currentLength2++;
        if(currentLength2 == tryText.length+1)
        {
            currentLength2 = 1;
        }
    }
    
}, 200);




var currentLength3 = 1;
var tryText = $("#tryKollektif-03").text();
var animation03 = setInterval(function()
{

    

    if($("#tryKollektif-03").text() != "")
    {
        $("#tryKollektif-03").text(tryText.substr(0, currentLength3));
        currentLength3++;
        if(currentLength3 == tryText.length+1)
        {
            currentLength3 = 1;
        }
    }
    
}, 200);




var currentLength4 = 1;
var tryText = $("#tryKollektif-04").text();
var animation04 = setInterval(function()
{

    

    if($("#tryKollektif-04").text() != "")
    {
        $("#tryKollektif-04").text(tryText.substr(0, currentLength4));
        currentLength4++;
        if(currentLength4 == tryText.length+1)
        {
            currentLength4 = 1;
        }
    }
    
}, 200);




var letters = ["this","life","which","had","been","the","tomb","of","his","virtue","and","of","his","honour","is","but","a","walking","shadow","a","poor","player","that","struts","and","frets","his","hour","upon","the","stage","and","then","is","heard","no","more","it","is","a","tale","told","by","an","idiot","full","of","sound","and","furry","william","sheakspare"];
var letters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","."];
var currentLetter2 = 1;
var currentLetter = 1;
var logoNumber = 1;
setInterval(function()
{
    $("#textAnimation02 , #textAnimation03").css("font-size","600px");
    $("#textAnimation02 , #textAnimation03").css("line-height","600px;");

    $("#textAnimation02 , #textAnimation03").text(letters2[currentLetter2]); 
    currentLetter2++; 
    if(currentLetter2 == 27)
    {
        currentLetter2 = 0;
    }


    if(currentLetter > 49)
    {
        $("#textAnimation01").css("font-size","40px")
    }
    else
    {
        $("#textAnimation01").css("font-size","180px")
    }


    $("#textAnimation01").text(letters[currentLetter]);
    currentLetter++; 
    if(currentLetter == 52)
    {
        currentLetter = 0;
    } 
    
}, 800);

var num = 1;
setInterval(function()
{
    $(".screensaver").css("display","none");
    $("#screensaver-0" + num).css("display","inline");
    
    num ++;
    if(num==9)
    {
        num=1;
    }
}, 600);


var turn = -1;
setInterval(function()
{
    $("#kollektifAlt01").css("display","none");
    $("#kollektifAlt02").css("display","none");

    if(turn == -1)
    {
        $("#kollektifAlt02").css("display","inline");
        turn *= -1;
    }
    else
    {
        $("#kollektifAlt01").css("display","inline");
        turn *= -1;
    }   
    
}, 800);

var turn2 = -1;
setInterval(function()
{
    $(".downImage01").css("display","none");
    $(".downImage02").css("display","none");

    if(turn2 == -1)
    {
        $(".downImage01").css("display","inline");
        turn2 *= -1;
    }
    else
    {
        $(".downImage02").css("display","inline");
        turn2 *= -1;
    }   
    
}, 180);

$(".downButton").hover(function()
    {
        $(".imageContainer").css("display","inline");

        $(".downButtonLink").css("color","white");

    },function()
    {
        $(".imageContainer").css("display","none");

        $(".downButtonLink").css("color","black");
    });

$("#submitWork").hover(function()
{
        $("#submitWork").css("color","white");
        $("#joinUs2").css("display","inline");



    },function()
    {
        $("#submitWork").css("color","black");
        $("#joinUs2").css("display","none");
    });






function changeFontSize (e) 
{
    $(event.target).closest(".sElement").find("textarea").css("font-size",e.value/3*5);
};

function changeFont (e) 
{
    if(e.value == "reg")
        {
            $(event.target).closest(".sElement").find("textarea").css("font-style","normal");
            $(event.target).closest(".sElement").find("textarea").css("font-weight","normal");
        }
        else if(e.value == "ita")
        {
            $(event.target).closest(".sElement").find("textarea").css("font-style","italic");
            $(event.target).closest(".sElement").find("textarea").css("font-weight","normal");
        }
        else if(e.value == "bol")
        {
            $(event.target).closest(".sElement").find("textarea").css("font-style","normal");
            $(event.target).closest(".sElement").find("textarea").css("font-weight","bold");
        }
        else if(e.value == "bolit")
        {
            $(event.target).closest(".sElement").find("textarea").css("font-style","italic");
            $(event.target).closest(".sElement").find("textarea").css("font-weight","bold");
        }
    
}

function clearContents (e) 
{
    $(event.target).text("");
    $(event.target).css("line-height","normal");
    $(event.target).css("text-align","left");
  
};

function changeBackground (e) 
{
    if(e.checked == true)
    {
        $(event.target).closest(".sElement").find("textarea").css("background-color","black");
        $(event.target).closest(".sElement").find("textarea").css("color","#ffffff");
    }
    else
    {
        $(event.target).closest(".sElement").find("textarea").css("background-color","#ffffff");
        $(event.target).closest(".sElement").find("textarea").css("color","black");
        $(event.target).closest(".sElement").find("textarea").css("color","black");

    }
    
};

function setInfoBox(e) 
{
    $("#infoBox").css("visibility","visible");
    $("#infoBox").text(e);
}

function clearInfoBox(e) 
{
    $("#infoBox").css("visibility","hidden");
    $("#infoBox").text("CURSOR!");
}








var leftValue=0;
var randomColor;
var type02distance= 172;

var ww = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

$( window ).resize(function() {
    ww = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
});

function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

function float2color( percentage ) {
    var color_part_dec = 255 * percentage;
    var color_part_hex = Number(parseInt( color_part_dec , 10)).toString(16);
    return "#" + color_part_hex + color_part_hex + color_part_hex;
}


$( window ).scroll(function() {

   console.log(ww);


  randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
  $( ".colorBox , .type03fs" ).css("background-color", randomColor);
  $(".colorfulText").css("color",randomColor);
  $(".colorfulBackground").css("background-color",randomColor);
  leftValue = $( window ).scrollLeft()/2;



  if($(window).scrollLeft() >= (7860-ww/2) && $(window).scrollLeft() <= (8860-ww/2) )
  {
    if($("#type03Content").css("display") == "inline")
    {
        
        $("body").css("background-color",convertHex('#000000',($(window).scrollLeft()-(8060-ww/2))/2));
        $("#space").css("opacity",($(window).scrollLeft()-(8060-ww/2))/200);
        console.log($(window).scrollLeft()-(8060-ww/2))

        if($(window).scrollLeft() >= (8660-ww/2) && $(window).scrollLeft() <= (8860-ww/2) )
          {
              $("body").css("background-color",convertHex('#000000',((8860-ww/2)-$(window).scrollLeft())/2));
              $("#space").css("opacity",((8860-ww/2)-$(window).scrollLeft())/200);
          }

    }
    $("#space").css("display","inline");

  }
  else
  {
    $("body").css("background-color","white");
    $("#space").css("display","none");
  }

  if(   Math.round((leftValue+150) /  300) % 2 == 0 )
  {
    $(".piston").css("margin-top", leftValue % 300 );
    $(".piston2").css("margin-top", 300 - leftValue % 300 );
  }
  else
    {
        $(".piston2").css("margin-top", leftValue % 300 );
        $(".piston").css("margin-top", 300 - leftValue % 300 );
    }



    if(leftValue >= 400 &&  leftValue <= 400+type02distance )
    {
         $("#type02down").css("margin-top",  (leftValue-400)*2 );
    }
    if(leftValue >= 400+type02distance )
    {
         $("#type02down").css("margin-top",  type02distance*2+2 );
         $("#type02down").css("margin-top",  346);
    }
    else
    {
        
    }
    if(leftValue <= 400 )
    {
         $("#type02down").css("margin-top",  0 );
    }


    $("#fivePixelRain").css("top",  (leftValue*2-2000) );

    if(leftValue >= 1150 )
    {
         $("#fivePixelRain").css("display",  "none" );
    }
    else
    {
        $("#fivePixelRain").css("display",  "inline" );
    }



});



$(".shopLink").hover(function()
    {
        $(event.target).css("color","white");

    },function()
    {
         $(event.target).css("color","black");
    });

function opacityDown (e) 
{
    event.target
}


/*
function hoverShop(element,sr) 
{
    element.setAttribute('src', sr);
}
function unhoverShop(element,sr) {
    element.setAttribute('src', sr);
}

<div class="sElement shopElement noSelect">
                <img class="shopImage" style="width:auto;" onmouseover="hoverShop(this,'img/shop/shop07.jpg');" onmouseout="unhoverShop(this,'img/shop/shop01.jpg');" src="img/shop/shop01.jpg">
                <a class="shopLink" href="mailto:info@bravenewfonts?Subject=I would like to buy Five Pixel Tote Bag" style="color:black; text-decoration:none;" target="_blank">Buy!</a>
                <div class="shopText">Five Pixel Tote Bag<br>35*40cm Canvas Fabric<br>Within TR: 20$ / Foreign: 30$</div>
            </div>
*/





