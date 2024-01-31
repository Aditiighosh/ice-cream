var clickCount = 1 ; 
$(".fruits").click(function() {
    var holder = ["cone","stick","cup"];
    var topping = ["chocolate","peanut"];
    if(clickCount == 1)
    {
    $("p").text("choose the holder");
    var strawberry = document.querySelector('img[alt="strawberry"]');
    strawberry.src='./stocks/cone.jpg';
    document.querySelector('img[alt="banana"]').setAttribute("src","./stocks/stick.jpg");
    document.querySelector('img[alt="grapes"]').setAttribute("src","./stocks/cup.webp");
    $("button.strawberry").text("cone");
    $("button.banana").text("stick");
    $("button.grapes").text("cup");
    $("button").css("width","90px");
    }
    if(clickCount==2)
    {
        $("p").text("choose the topping");
        document.querySelector('img[alt="strawberry"]').setAttribute("src","./stocks/chocolate.jpg");
        document.querySelector('img[alt="banana"]').setAttribute("src","./stocks/peanut.jpeg");
        document.querySelector('img[alt="grapes"]').setAttribute("src","./stocks/rainbow.jpg");
        $("button.strawberry").text("chocolate");
        $("button.banana").text("peanut");
        $("button.grapes").text("rainbow sprinkles");
        $("button").css("width","120px");
    }
    if(clickCount == 3)
    {
        $("button").addClass("hidden");
        $("#fruits").addClass("hidden");
        $("p").text("sike you get nothing");
        var audio = new Audio("./sitcom.mp4");
        audio.play();   
        var videoElement = document.createElement('video');
    videoElement.width = 640;
    videoElement.height = 360;
    videoElement.controls = true;

    // Create a source element and set the video file
    var sourceElement = document.createElement('source');
    sourceElement.src = 'video1.mov';
    //sourceElement.type = 'video/mp4';

    // Append the source element to the video element
    videoElement.appendChild(sourceElement);

    
   
    var containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.justifyContent = 'center';
    containerDiv.appendChild(videoElement);
    document.body.appendChild(containerDiv);
    }
 clickCount++;
});
