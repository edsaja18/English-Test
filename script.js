$(document).ready(function() {
    $('.form').find('input, textarea').on('keyup blur focus', function(e) {
      var $this = $(this),
          label = $this.prev('label');
  
      if (e.type === 'keyup') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
      } else if (e.type === 'blur') {
        if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.removeClass('highlight');
        }
      } else if (e.type === 'focus') {
        if ($this.val() === '') {
          label.removeClass('highlight');
        } else {
          label.addClass('highlight');
        }
      }
    });
  
    $('.tab-group li a').on('click', function(e) {
      e.preventDefault();
  
      $(this).parent().addClass('active').siblings().removeClass('active');
  
      var target = $(this).attr('href');
  
      $('.tab-content > div').not(target).hide();
      $(target).fadeIn(600);
    });
  });
  