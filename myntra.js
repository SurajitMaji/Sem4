function show_men(){
    let ele=document.getElementById('men_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_men_content');
    ele.style.borderBottom="3px solid rgb(236, 33, 57)";
    ele.style.paddingBottom="29px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_men(){
    let ele=document.getElementById('men_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_men_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="34px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}

function show_women(){
    let ele=document.getElementById('women_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_women_content');
    ele.style.borderBottom="3px solid  rgb(251, 79, 173)";
    ele.style.paddingBottom="29px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_women(){
    let ele=document.getElementById('women_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_women_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="34px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}


function show_kids(){
    let ele=document.getElementById('kids_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_kids_content');
    ele.style.borderBottom="3px solid  rgb(255, 183, 49)";
    ele.style.paddingBottom="29px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_kids(){
    let ele=document.getElementById('kids_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_kids_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="34px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}



function show_home_living(){
    let ele=document.getElementById('home_living_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_home_living_content');
    ele.style.borderBottom="3px solid rgb(247, 247, 20)";
    ele.style.paddingBottom="29px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_home_living(){
    let ele=document.getElementById('home_living_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_home_living_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="34px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}



function show_beauty(){
    let ele=document.getElementById('beauty_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_beauty_content');
    ele.style.borderBottom="3px solid rgb(74, 136, 250)";
    ele.style.paddingBottom="29px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_beauty(){
    let ele=document.getElementById('beauty_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_beauty_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="34px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}
function show_profile(){
    let ele=document.getElementById('profile_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_profile_content');
    ele.style.borderBottom="5px solid  rgb(236, 33, 57)";
    ele.style.paddingBottom="1px";
    place.style.visibility="visible";
    details.style.visibility="visible";
}
function hide_profile(){
    let ele=document.getElementById('profile_nav');
    let place=document.getElementById('nav_hover_content');
    let details=document.getElementById('nav_profile_content');
    ele.style.borderBottom="none";
    ele.style.paddingBottom="4px";
    place.style.visibility="hidden";
    details.style.visibility="hidden";
}

// function for autometic banner changing
function banner_change(){
}
var arr=["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner5.jpg"];
var index=0;
setInterval(function next() {
index++;
 if(index>=5)
 {
 index=0;
 }
//  console.log(arr[index]);
 document.getElementById("banner_image").src=arr[index];
 
}, 4000);

// notification
function show_hide_notification(){
    console.log("Notification function working");
    let notification_details=document.getElementById('hidden_notification_area');
    let area=document.getElementById('notification_area');
    let logo=document.getElementById('notification_logo');
    let triangle=document.getElementById('triangle');
     if(notification_details.style.visibility!="hidden"){
        triangle.style.border="20px solid transparent";
        triangle.style.borderBottom="20px solid white";
        notification_details.style.visibility="hidden";
        area.style.margin=" 220px 0px 0px 1190px";
        // logo.style.justifyContent="bas"
        area.style.alignItems="center";
        logo.style.marginRight="85px";
     }
     else{
        triangle.style.border="20px solid transparent";
        triangle.style.borderTop="20px solid white";
        notification_details.style.visibility="visible";
        area.style.margin=" 220px 0px 0px 724px";
        area.style.alignItems="end";
        logo.style.marginRight="-6px";
     }

}
