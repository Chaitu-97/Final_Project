
"use strict"
var is_clicked = 1;
var click_counter = 0;
var $ = function(id)
{
    return document.getElementById(id);
};

function updateTime() {
    var now = new Date();
    var month = String(now.getMonth() + 1).padStart(2, "0");
    var day = String(now.getDate()).padStart(2, "0");
    var year = String(now.getFullYear()).padStart(2, "0");
    var hours = String(now.getHours()).padStart(2, "0");
    var minutes = String(now.getMinutes()).padStart(2, "0");
    var seconds = String(now.getSeconds()).padStart(2, "0");

    var formattedTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
    $("current_time").innerHTML = formattedTime;
   
}
var switch_language = function()
{
    var html_str = "";
    if(click_counter % 3 == 0){
        //display 1st language
        html_str = "<h2>Whiskers</h2><h5>The Cat Coder Ninja</h5><p>In a world where coding prowess and ninja agility are paramount, there emerges a unique hero: meet Whiskers, the Cat Coder Ninja. With the stealth of a shadow and the brilliance of a master programmer, Whiskers navigates the digital landscape with unparalleled finesse. By day, he is a seemingly ordinary feline, but by night, he transforms into a legendary coder, tackling complex algorithms and vanquishing bugs with a flick of his paw. Whether he's scaling virtual firewalls or pouncing on security vulnerabilities, Whiskers combines his ninja reflexes with his coding expertise to protect and optimize the digital realm. Get ready to embark on thrilling adventures with the most extraordinary feline coder you've ever met!</p>";
        click_counter++;

    }else if (click_counter % 3 == 1){
          //display 2st language
          html_str = "<h2>व्हिस्कर्स</h2><h5>द कैट कोडर निंजा</h5><p>एक ऐसी दुनिया में जहाँ कोडिंग की कुशलता और निंजा की चपलता महत्वपूर्ण हैं, एक अद्वितीय हीरो उभरता है: मिलिए व्हिस्कर्स से, द कैट कोडर निंजा। छाया की तरह चुपके से और एक मास्टर प्रोग्रामर की चमक के साथ, व्हिस्कर्स डिजिटल दुनिया को अद्वितीय कौशल के साथ नेविगेट करता है। दिन में, वह एक साधारण बिल्ला प्रतीत होता है, लेकिन रात में, वह एक महान प्रोग्रामर में बदल जाता है, जटिल एल्गोरिदम को हल करता है और एक झटके में बग को मिटा देता है। चाहे वह वर्चुअल फायरवॉल को स्केल कर रहा हो या सुरक्षा कमजोरियों पर झपट्टा मार रहा हो, व्हिस्कर्स अपने निंजा रिफ्लेक्सेस को अपनी कोडिंग विशेषज्ञता के साथ मिलाकर डिजिटल क्षेत्र की रक्षा और अनुकूलन करता है। तैयार हो जाइए सबसे असाधारण बिल्ली कोडर के साथ रोमांचक रोमांच पर जाने के लिए जिसे आपने कभी देखा है!</p>";
            click_counter++;
    } else {
          //display 3st language
          html_str = "<h2>Bigotes</h2><h5>El Ninja Programador Gato</h5><p>En un mundo donde la destreza en la programación y la agilidad ninja son primordiales, surge un héroe único: conoce a Bigotes, el Ninja Programador Gato. Con la discreción de una sombra y el brillo de un programador maestro, Bigotes navega por el paisaje digital con una destreza inigualable. De día, es un felino aparentemente ordinario, pero de noche se transforma en un legendario programador, abordando algoritmos complejos y venciendo errores con un movimiento de su pata. Ya sea escalando cortafuegos virtuales o saltando sobre vulnerabilidades de seguridad, Bigotes combina sus reflejos ninja con su experiencia en programación para proteger y optimizar el reino digital. ¡Prepárate para embarcarte en emocionantes aventuras con el programador felino más extraordinario que jamás hayas conocido!</p>";
           click_counter++;
    }
     $("introduction").innerHTML= html_str;
}

function toggleProjectDetails(box) {
    var icon = box.querySelector(".toggle-icon");
    var projectName = box.querySelector(".project_name");
    var projectDetails = box.querySelector("h5");
    var screenshot = box.querySelector(".screenshot");

    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
        screenshot.style.display = "block";
        icon.src = "img/minus.png";
    } else {
        projectDetails.style.display = "none";
        screenshot.style.display = "none";
        icon.src = "img/plus.png";
    }
}

window.onload = function()
{
    $("language_switch").onclick = switch_language;
    updateTime(); // Update the time immediately on load
    setInterval(updateTime, 1000); // Update the time every second
};