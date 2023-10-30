$(document).ready(function(e){$("#menu-icon").bind("click",function(){$(this).parent().toggleClass("open");$('header').toggleClass("open");$('body').toggleClass("open");});show_contact_popup();var $animation_elements=$('.animation-element');var $window=$(window);function check_if_in_view(){var window_height=$window.height();var window_top_position=$window.scrollTop();var window_bottom_position=(window_top_position+window_height);$.each($animation_elements,function(){var $element=$(this);var element_height=$element.outerHeight();var element_top_position=$element.offset().top;var element_bottom_position=(element_top_position+element_height);if((element_bottom_position>=window_top_position)&&(element_top_position<=window_bottom_position)){$element.addClass('in-view');}else{$element.removeClass('in-view');}});}
$window.on('scroll resize',check_if_in_view);$window.trigger('scroll');function calculateLogosInRow(){var LogosInRow=0;$('.client_logo').each(function(){if($(this).prev().length>0){if($(this).position().top!=$(this).prev().position().top)return false;LogosInRow++;}
else{LogosInRow++;}});return LogosInRow;}
var logos_in_a_row=calculateLogosInRow();var interval=200;var transition_delay=0;$(".logos .client_logo").each(function(index,el){transition_delay=transition_delay+interval;$(this).css({transitionDelay:transition_delay+'ms'});if((index+1)%logos_in_a_row===0)
{transition_delay=0;}});var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=$('.cd-top');$(window).scroll(function(){($(this).scrollTop()>offset)?$back_to_top.addClass('cd-is-visible'):$back_to_top.removeClass('cd-is-visible cd-fade-out');if($(this).scrollTop()>offset_opacity){$back_to_top.addClass('cd-fade-out');}});$back_to_top.on('click',function(event){event.preventDefault();$('body,html').animate({scrollTop:0,},scroll_top_duration);});$(window).scroll(function(){if($(window).scrollTop()>10){$(".bottom-banner").addClass("strip");}
if($(window).scrollTop()<10){$(".bottom-banner").removeClass("strip");}});$(".various").fancybox({prevEffect:'none',nextEffect:'none',fitToView:false,width:'800px',height:'500px',autoSize:false,closeClick:false,openEffect:'none',closeEffect:'none'});var $btns=$('.filter-item').click(function(){if(this.id=='all'){$('.blogdetail').fadeIn();}else{var $el=$('.'+this.id).fadeIn();$('.blogdetail').not($el).hide();}
$btns.removeClass('filter-item-active');$(this).addClass('filter-item-active');});$('#photo').click(function(){$('.all-photo').fadeIn();$('.all-video').fadeOut();$('.robbo li').toggleClass('active');});$('#video').click(function(){$('.all-photo').fadeOut();$('.all-video').fadeIn();$('.robbo li').toggleClass('active');});clearTimeout(window.resizedFinished);window.resizedFinished=setTimeout(function(){setTimelineHeight();},250);jQuery(window).scroll(function(){var dimension=get_viewport_dimension();if(dimension.width>=769)
{setTimelineHeight();}});$(window).resize(function(e){clearTimeout(window.resizedFinished);window.resizedFinished=setTimeout(function(){setTimelineHeight();},250);});function setTimelineHeight(){var dimension=get_viewport_dimension();if(dimension.width>=769){var p=$(".timelinetable-row:last-child");var position=p.position();var ajdVal=p.height();}else{$(".timeline-path").removeAttr("style");}}
function isTouchDevice()
{return window.ontouchstart!==undefined;}
function isInternetExplorer()
{if(navigator.userAgent.indexOf('MSIE')!==-1||navigator.appVersion.indexOf('Trident/')>0)
{return 1;}
else
{return 0;}}
if(navigator.userAgent.match(/i(Phone|Pad|Pod)/i)){$('.iFrameiOs .blogslist .blog_pic.onlyios').addClass('iphone');$('.iFrameiOs .blogslist .blog_pic.onAll').addClass('iphone');}
function isSafari()
{if(navigator.userAgent.search("Safari")>=0&&navigator.userAgent.search("Chrome")<0)
{return 1;}
else
{return 0;}}
function get_viewport_dimension()
{var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight;}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
if(isSafari())
{myWidth=myWidth-get_scrollbar_width();}
var dimension={width:myWidth,height:myHeight};return dimension;}
function get_operating_system()
{var OSName="Unknown OS";if(navigator.appVersion.indexOf("Win")!=-1)OSName="Windows";if(navigator.appVersion.indexOf("Mac")!=-1)OSName="MacOS";if(navigator.appVersion.indexOf("X11")!=-1)OSName="UNIX";if(navigator.appVersion.indexOf("Linux")!=-1)OSName="Linux";return OSName;}
var operating_system=get_operating_system();function get_scrollbar_width()
{if(isSafari()&&operating_system=="MacOS")
{var scrollWidth=15;}
else
{var scrollWidth=17;}
return scrollWidth;}
if(isInternetExplorer())
{jQuery("body").addClass("IE");}
if($(window).width()<=768){$('li.bpos, li.indstrz, li.DDblogs, li.DDresource, li.DDpodcast').click(function(){$(".submenu").removeClass('jactive');$(this).children(".submenu").addClass('jactive');$(".submenu:not(.jactive)").hide('slow');$(this).children(".submenu").slideToggle(500);$(this).children(".down-arrow").toggleClass('rotate');var isChecked=$(this).children(".down-arrow").hasClass('rotate');if(isChecked==true){$(".down-arrow").removeClass('rotate');$(this).children(".down-arrow").toggleClass('rotate')}});$('#menu-icon').click(function(){var isOpen=$("header").hasClass('open');if(isOpen==true){$(".post-tabs").css({"display":"initial","white-space":"initial"});}else{$(".post-tabs").removeAttr('style');}});$('li.bpos .submenu ul li a, li.indstrz .submenu ul li a, li.DDblogs .submenu ul li a, .view-more').click(function(event){event.stopPropagation();});}
else{var $hover=$('.DDblogs').hover(function(){$('.DDblogs .submenu').addClass('show')},function(){$('.DDblogs .submenu').removeClass('show')});var $hover=$('.bpos').hover(function(){$('.bpos .submenu').addClass('show')},function(){$('.bpos .submenu').removeClass('show')});var $hover=$('.indstrz').hover(function(){$('.indstrz .submenu').addClass('show')},function(){$('.indstrz .submenu').removeClass('show')});var $hover=$('.DDpodcast').hover(function(){$('.DDpodcast .submenu').addClass('show')},function(){$('.DDpodcast .submenu').removeClass('show')});var $hover=$('.DDresource').hover(function(){$('.DDresource .submenu').addClass('show')},function(){$('.DDresource .submenu').removeClass('show')});}
$("div").bind("click",function(){$('.submenu').removeClass("show");});$(".join a.button").click(function(){$('form').fadeOut(1000,function(){$('.tip').fadeIn(1000);});});
/*
$(".bottom-banner").click(function(){
  $('.pop').slideToggle(1000);
  $('body').toggleClass('popopen')

});
$(".pop .close").click(function(){
  $('.pop').slideToggle(1000);
  $('body').toggleClass('popopen')
});

var KEYCODE_ESC=27;$(document).keyup(function(e){if(e.keyCode==KEYCODE_ESC)
$('.pop').slideUp(1000);$('body').removeClass('popopen');}
);
*/

});function show_contact_popup(){if($(".wpcf7-response-output.wpcf7-mail-sent-ok").length||$(".wpcf7-response-output.wpcf7-validation-errors").length||$(".wpcf7-response-output.wpcf7-spam-blocked").length){if($(".join-page").length==0&&$(".contact-two").length==0){$('.pop').show();}}}

// custom contact form data send by API
function captchaCallback(token) {
      
  // alert(token);
  $("#myContactForm #token").val("");
  //document.getElementById("token").value = "";
  if(typeof token !== 'undefined' && token!==null){
    //document.getElementById("token").value = token;
    $("#myContactForm #token").val(token);
    // console.log(token);
    // console.log("submit form");
    // $("#myContactForm").removeAttr("disabled");
    
    // $("form").submit();
  }
}

function careersCaptchaCallback(token) {
      
  // alert(token);
  $("#myContactFormCareer #token").val("");
  //document.getElementById("token").value = "";
  if(typeof token !== 'undefined' && token!==null){
    //document.getElementById("token").value = token;
    $("#myContactFormCareer #token").val(token);
    // console.log(token);
    // console.log("submit careers form");
    // $("#myContactFormCareer").removeAttr("disabled");
    
    // $("form").submit();
  }
}

$(document).ready(function(e){
  var checkClassExit =  $("section").hasClass("apply-now-career");
  console.log("checkClassExit", checkClassExit);
  // append contact form and career form 
  var captcha_html = '<br /><span><input type="hidden" name="token" id="token" /><div class="g-recaptcha" data-sitekey="6Ldxn4YgAAAAAGCZ80u-aPjJxEzCYw0DyuEQy1WX" data-callback="careersCaptchaCallback"></div></span>';
  
  if(checkClassExit){
    $('body').append('<section class="pop arcgate-career-form"><div class="head01"><img src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/arcgate-orange.svg" class="logopop" width="200" alt=""><div class="close"><img src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/menu-icon-close.svg" alt=""></div></div><div class="becomeagian-left"><div class="becom-in"><h1>Become an Arcgatian</h1><h2>We believe in learning, teamwork and humility. Arcgatians are driven by radical transparency and honesty. <br></h2><h2>Do you share these values?<br> </h2><h3>Join us today!</h3></div></div><section class="join-right join"><div class="landW100"><h1>We would love to hear from you</h1><div class="join-innner join-only "><div><div class="screen-reader-response" id="myFormResponseData"></div><form name="contact-form" action="" method="post" enctype="multipart/form-data" id="myContactFormCareer"><p><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/name.png" /><input type="text" name="Name" value="" size="40" id="name" aria-invalid="false" placeholder="Name"></span><br><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/tel.png" /><input type="tel" name="Mobile" value="" size="40" id="mobile" aria-invalid="false" placeholder="Phone"></span><br><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/email.png" /><input type="email" name="Email" value="" size="40" id="email" aria-invalid="false" placeholder="Email"></span><br><span class=""><textarea name="Message" cols="40" rows="10" id="message" aria-invalid="false" placeholder="Message"></textarea></span>'+captcha_html+'</p><p><span class="wpcf7-form-control-wrap Resume-CV"><input type="file" name="file" id="file-upload" size="40" class="wpcf7-form-control wpcf7-file"></span></p><div class="bottom-btn"><div align="center" class="form_loading" style="display:none;"><div class="submit-btn-overlay-career"><img src="arcgate-content/arcgate-assets/arcgate/images/load.gif" alt="Loading" /></div></div><input type="submit" value="Submit"></div></form></div></div></div></section></section>');
  }else{
    captcha_html = '<br /><span><input type="hidden" name="token" id="token" /><div class="g-recaptcha" data-sitekey="6Ldy1wggAAAAAHT1p8aM6Z9A1pifAI6Ut9PcqLHI" data-callback="captchaCallback"></div></span>';
    $('body').append('<section class="pop arcgate-contact-form"><div class="head01"><img src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/arcgate-orange.svg" class="logopop" width="200" alt=""><div class="close"><img src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/menu-icon-close.svg" alt=""></div></div><section class="becomeagian-left"><div class="becom-in"><h1>Explore how we can help your startup accelerate</h1><h2>We help some of the most innovative startups in the world with AI training data augmentation, data enrichment, lead generation, customer onboarding and order management. We believe that humans can augment machines to deliver smarter solutions. Let\'s talk.</h2></div></section><section class="join-right join"><div class="landW100"><h1>We would love to hear from you</h1><div class="join-innner "><div><div class="screen-reader-response" id="myFormResponseData"></div><form name="contact-form" action="" method="post" id="myContactForm"><p><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/name.png" /><input type="text" name="Name" value="" size="40" id="name" aria-invalid="false" placeholder="Name"></span><br><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/tel.png" /><input type="tel" name="Mobile" value="" size="40" id="mobile" aria-invalid="false" placeholder="Phone"></span><br><span class="relative"><img class="img-pos" src="https://www.arcgate.com/arcgate-content/arcgate-assets/arcgate/images/email.png" /><input type="email" name="Email" value="" size="40" id="email" aria-invalid="false" placeholder="Email"></span><br><span class=""><textarea name="Message" cols="40" rows="10" id="message" aria-invalid="false" placeholder="Message"></textarea></span>'+captcha_html+'</p><div class="bottom-btn"><div align="center" class="form_loading" style="display:none;"><div class="submit-btn-overlay-career"><img src="arcgate-content/arcgate-assets/arcgate/images/load.gif" alt="Loading" /></div></div><input type="submit" value="Submit"></div></form></div><div class=""><h3>Arcgate<br>G1-11, I.T.Park, M.I.A. (Extn.)<br>Udaipur - 313003<br>Rajasthan, India<br>+91 77420 92381<br>+91 77420 92382</h3></div></div></div></section></section>');
  }
  
  $(".bottom-banner").click(function(){
    $('.pop').slideToggle(1000);
    $('body').addClass('popopen')
    
  });
  $(".pop .close").click(function(){
    $( ".hello" ).remove();
    $('.pop').slideToggle(1000);
    $('body').removeClass('popopen')
    $('#myContactForm').trigger("reset");
    $('#myContactFormCareer').trigger("reset");
  });
  $(".strip-close").click(function(){
    $('.top-strip').slideToggle(10);
    $('.temp').slideUp(10);
    $('.mobile-strip-close').slideUp(10);
    $('.container').css("margin-top", "55px");

  });
  $(".mobile-strip-close").click(function(){
    $('.mobile-top-strip').slideToggle(10);
    $('header').css("margin-top", "0px");
  });

  $('#file-upload').change(function () {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
  });
  
  // hide form 
  var KEYCODE_ESC=27;
  $(document).keyup(function(e){
    if(e.keyCode==KEYCODE_ESC){
      $('.pop').slideUp(1000);
      $('body').removeClass('popopen');
    }
  });

  // function for arcgate contact form 
 
  $(function () {
    
    $('#myContactForm').on('submit',function (e) {

      e.preventDefault();

      // Get values from form fields
      // var param1 = document.getElementById("name").value;
      // var param2 = document.getElementById("mobile").value;
      // var param3 = document.getElementById("email").value;
      // var param4 = document.getElementById("message").value;
      // var param_token = document.getElementById("token").value;
      var param1 = $("#myContactForm #name").val();
      var param2 = $("#myContactForm #mobile").val();
      var param3 = $("#myContactForm #email").val();
      var param4 = $("#myContactForm #message").val();
      var param_token = $("#myContactForm #token").val();
      console.log("param1" + param1 + "param2" + param2 + "param3" + param3 + "param4" + param4)

      //validation
      if (param1 == "") {
        alert("Name must be filled out");
        return false;
      }
      if (param2 == "") {
        alert("Mobile must be filled out");
        return false;
      }
      if (param3 == "") {
        alert("Email must be filled out");
        return false;
      }
      if (param4 == "") {
        alert("Message must be filled out");
        return false;
      }
      if (param_token == "") {
        alert("Captcha must be checked out");
        return false;
      }

      $('.form_loading').show();

      // POST request using fetch() 
      var contact_api_url = "https://guo1k44ao8.execute-api.ap-south-1.amazonaws.com/arcgate/emailFormData";
      //contact_api_url = "https://ud1ycb6v7b.execute-api.ap-south-1.amazonaws.com/arcemail";

      fetch(contact_api_url, { 
        
        // Adding method type 
        method: "POST", 
        
        // Adding body or contents to send 
        body: JSON.stringify({ 
            name: param1, 
            mobile: param2, 
            email: param3,
            message:param4,
            token:param_token,
            type:"contact",
        }), 
          
        // Adding headers to the request 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
      }) 
      
      // Converting to JSON 
      .then(response => response.json()) 
        
      // Displaying results to console 
      //.then(json => console.log(json)); 
      .then(data => formMessaeData(data))
      function formMessaeData(data) {
        console.log("data" , data)
        $('.form_loading').hide();

        // Displaying results to container
        var formResponseContainer = document.getElementById("myFormResponseData");
        var div = document.createElement("div");
        if(data.status === "success"){
          div.innerHTML = '<div style="border: 2px solid #398f14;padding: 5px 5px;text-align: center;">'+ data.message +'</div>'
          
          // Reset all form data
          var frm = document.getElementsByName('contact-form')[0];
          frm.reset();  // Reset all form data

        }else{
          div.innerHTML = '<div style="border: 2px solid orange;padding: 5px 5px;text-align: center;">'+ data.message +'</div>'
        }
        formResponseContainer.appendChild(div);
        setTimeout(function(){
           //alert("Hello"); 
           formResponseContainer.removeChild(div);
        }, 4000);

      }
          
    });
  });

  // function for arcgate career form 
  $(function () {
    $('#myContactFormCareer').on('submit',function (e) {

      e.preventDefault();
      // Get values from form fields
      // var param1 = document.getElementById("name").value;
      // var param2 = document.getElementById("mobile").value;
      // var param3 = document.getElementById("email").value;
      // var param4 = document.getElementById("message").value;
      // var file = document.getElementById("file-upload").value;
      // var param_token = document.getElementById("token").value;
      var param1 = $("#myContactFormCareer #name").val();
      var param2 = $("#myContactFormCareer #mobile").val();
      var param3 = $("#myContactFormCareer #email").val();
      var param4 = $("#myContactFormCareer #message").val();
      var file = $("#myContactFormCareer #file-upload").val();
      var param_token = $("#myContactFormCareer #token").val();
      
      var url_string = window.location.href;
      var url = new URL(url_string);
      var post_name = url.searchParams.get("post_name");
      $("#post_name").val(post_name);

      console.log("post_name" + post_name + "post_name" + "param1" + param1 + "param2" + param2 + "param3" + param3 + "param4" + param4 + "param5" + file)

      //validation
      if (param1 == "") {
        alert("Name must be filled out");
        return false;
      }
      if (param2 == "") {
        alert("Mobile must be filled out");
        return false;
      }
      if (param3 == "") {
        alert("Email must be filled out");
        return false;
      }
      if (param4 == "") {
        alert("Message must be filled out");
        return false;
      }
      if (param_token == "") {
        alert("Captcha must be checked out");
        return false;
      }
      if (file == "") {
        console.log("fileaaaa", file)
        alert("Resume-CV must be filled out");
        return false;
      }
      
      const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });
        
      async function Main() {
        const fileName = document.querySelector('input[type=file]').files[0].name;
        const fileSize = document.querySelector('input[type=file]').files[0].size;

        const file64 = document.querySelector('input[type=file]').files[0];
        
        // check file extension 
        var allowedFiles = [".doc", ".docx", ".pdf"];
        var fileUpload = $("#file-upload");
        var regex = new RegExp("([a-zA-Z0-9\s_\\.\-:])+(" + allowedFiles.join('|') + ")$");
        if (!regex.test(fileUpload.val().toLowerCase())) {
            alert("Please upload files having extensions: " + allowedFiles.join(', ') + " only.");
            return false;
        }
        if(fileSize > 5000000  ){
          alert("File size is less than 5MB");
          return false;
        }


        const filedata = await toBase64(file64)
        console.log("filedata", filedata)

        // show loader 
        $('.form_loading').show();

        // POST request using fetch() 
        var contact_api_url = "https://guo1k44ao8.execute-api.ap-south-1.amazonaws.com/arcgate/emailFormData";
        // contact_api_url = "https://ud1ycb6v7b.execute-api.ap-south-1.amazonaws.com/arcemail";
        fetch(contact_api_url, { 
          
          // Adding method type 
          method: "POST", 
          
          // Adding body or contents to send 
          body: JSON.stringify({ 
              name: param1, 
              mobile: param2, 
              email: param3,
              message:param4,
	            token:param_token, 	
              //attachments: [{'name': 'name', 'file': ''+filedata+''}],
              type:"career",
              post_name: post_name,
              attachment_name: ''+fileName+'',
              attachment_file: ''+filedata+''

          }), 
            
          // Adding headers to the request 
          headers: { 
              "Content-type": "application/json; charset=UTF-8",

          } 
        }) 
        
        // Converting to JSON 
        .then(response => response.json()) 
          
        // Displaying results to console 
        //.then(json => console.log(json)); 
        .then(data => formMessaeData(data))
        function formMessaeData(data) {
          console.log("data" , data)
          $('.form_loading').hide();

          // Displaying results to container
          var formResponseContainer = document.getElementById("myFormResponseData");
          var div = document.createElement("div");
          if(data.status === "success"){
            div.innerHTML = '<div style="border: 2px solid #398f14;padding: 5px 5px;text-align: center;">'+ data.message +'</div>'
            
            // Reset all form data
            var frm = document.getElementsByName('contact-form')[0];
            frm.reset();  // Reset all form data

          }else{
            div.innerHTML = '<div style="border: 2px solid orange;padding: 5px 5px;text-align: center;">'+ data.message +'</div>'
          }
          formResponseContainer.appendChild(div);
          setTimeout(function(){
            //alert("Hello"); 
            formResponseContainer.removeChild(div);
          }, 4000);

        }

      }

      Main();
  
    });
  });

})
