document.addEventListener('load', function() {

    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');

    function validateEmail() {
        var email = inputEmail.value.trim();
        var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;;
        var valid = regex.test(email);

        if (valid == true) {
            inputEmail.classList.remove('inputError');
        } else {
            inputEmail.classList.add('inputError');
        }
        return valid;
    }

    function validatePassword() {
        var password = inputPassword.value.trim();
        var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
        var valid = regex.test(password);

        if (valid == true) {
            inputPassword.classList.remove('inputError');
        } else {
            inputPassword.classList.add('inputError');
        }
        return valid;
    }

    inputEmail.addEventListener('blur', function() {
        validateEmail();
    });

    inputPassword.addEventListener('blur', function() {
        validatePassword();
    })

    inputEmail.addEventListener('focus', function() {
        inputEmail.classList.remove('inputError');
    });

    inputPassword.addEventListener('focus', function() {
        inputPassword.classList.remove('inputError');
    });


    function submitLogin() {
        var email = inputEmail.value;
        var password = inputPassword.value;

        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + password)
            .then((response) => response.json())
            .then((data) => {
                if (data.success == true) {
                    alert('Request was successful!: ' + data.msg);
                } else {
                    alert('Credentials are invalid: ' + data.msg);
                }
            });
    }

    document.getElementById('login').addEventListener('click', function(event) {
        event.preventDefault();

        var validEmail = validateEmail(inputEmail);
        var validPassword = validatePassword(inputPassword);

        if (validEmail == true && validPassword == true) {
            alert('User logged in! Email: ' + inputEmail.value + ' - Password: ' + inputPassword.value);
            submitLogin();
        } else {
            var errors = [];

            if (validEmail == false) {
                errors.push('Email is not valid');
            }

            if (validPassword == false) {
                errors.push('Password is not valid');
            }

            alert('Cannot log in: ' + errors.join(', '));
        }
    });

});
