$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#status-message').text("Enabled: Items & Options loaded successfully");

    // Get the modal
    var modal = document.getElementById('helpModal');

    // Get the button that opens the modal
    var btn = document.getElementById("helpBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    $(document).ready(function () {
        var $element = $('.title-bar-wrapper');
        var $follow = $element.find('#title-bar');
        var followHeight = $element.find('title-bar').outerHeight();
        var height = $element.outerHeight();
        var window_height = $(window).height();
  
        $(window).scroll(function () {
          var pos = $(window).scrollTop();
          var top = $element.offset().top;
  
  
  
          // Check if element totally above or totally below viewport
          if (top + height - followHeight < pos || top > pos + window_height) {
            return;
          }
  
  
          var offset = parseInt($(window).scrollTop() - top);
  
          if (offset > 0) {
            $follow.css('background', '#454545');
            $("footer-bar-wrapper").hide;
          }
  
          if (offset < 0) {
            $follow.css('background', 'transparent');
          }
  
        });
      });



       //TAB CONTROL TOGGLES
    $(document).ready(function () {
        $('#itemcontrols').show();
        $('#extracontrols').hide();
        $('#settingcontrols').hide();
  
  
        // Show the first tab by default
        $('.tabs-stage div').hide();
        $('.tabs-stage div:first').show();
        $('.tabs-nav li:first').addClass('tab-active');
  
        // Change tab class and display content
        $('.tabs-nav a').on('click', function (event) {
          event.preventDefault();
          $('.tabs-nav li').removeClass('tab-active');
          $(this).parent().addClass('tab-active');
          $('.tabs-stage div').hide();
          $($(this).attr('href')).show();
        });
  
  
        $('input[type="radio"]').click(function () {
          //ITEMS TAB CONTROLS
          if ($(this).attr('id') == 'tab1') {
            $('#itemcontrols').show();
          } else {
            $('#itemcontrols').hide();
          }
          //EXTRAS TAB CONTROLS
          if ($(this).attr('id') == 'tab2') {
            $('#extracontrols').show();
          } else {
            $('#extracontrols').hide();
          }
          //SETTIGNS TAB CONTROLS
          if ($(this).attr('id') == 'tab3') {
            $('#settingcontrols').show();
          } else {
            $('#settingcontrols').hide();
          }
        });
      });
  
      var acc = document.getElementsByClassName("accordion");
      var i;
  
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }