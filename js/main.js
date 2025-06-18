(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 60
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    //Form Validation
    function validateForm(event) {
        event.preventDefault(); // Prevent form submission
        
        // Perform form validation
        if (validate()) {
            // If validation succeeds, submit the form
            submitForm();
        }
    }
    
    function submitForm() {
        // Perform form submission actions (e.g., sending data to server)
        // After successful submission, redirect to another page
        window.location.href = "success.html";
    }

    function validate() {
        var isValid = true;
        
        // Validate name field
        var nameField = document.getElementById('name');
        if (nameField.value === '') {
            alert("Please enter your name.");
            isValid = false;
        }
    
        // Validate email field
        var emailField = document.getElementById('email');
        if (emailField.value === '' || !validateEmail(emailField.value)) {
            alert("Please enter a valid email address.");
            isValid = false;
        }
    
        // Validate message field
        var messageField = document.getElementById('message');
        if (messageField.value === '') {
            alert("Please enter a message.");
            isValid = false;
        }
    
        return isValid;
    }

    function validateEmail(email) {
        // Regular expression for email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    
})(jQuery);