document.addEventListener('DOMContentLoaded', function () {

    var storedUser = localStorage.getItem('userInfo');

    if (storedUser != undefined) {
        storedUser = JSON.parse(storedUser);

        for (var entry of Object.entries(storedUser)) {

            var id = entry[0];
            var value = entry[1];

            var input = document.getElementById(id);
            if (input != undefined) {
                input.value = value;
            }

            if (id == 'password') {
                document.getElementById('passwordRepeat').value = value;
            }

        }

    }

    var inputName = document.getElementById('name');
    var inputLastname = document.getElementById('lastName');
    var inputDNI = document.getElementById('dni');
    var inputBirthdate = document.getElementById('dob');
    var inputTelephone = document.getElementById('phone');
    var inputAddress = document.getElementById('address');
    var inputCity = document.getElementById('city');
    var inputPostalCode = document.getElementById('zip');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var inputPasswordRepeat = document.getElementById('passwordRepeat');

    function validateName() {
        var name = inputName.value.trim();
        var regex = /[a-zA-Z]/g;
        var valid = name.length > 3 && regex.test(name);

        if (valid == true) {
            inputName.classList.remove('inputError');
        } else {
            inputName.classList.add('inputError');
        }
        return valid;
    }

    function validateLastname() {
        var lastname = inputLastname.value.trim();
        var regex = /[a-zA-Z]/g;
        var valid = lastname.length > 3 && regex.test(lastname);

        if (valid == true) {
            inputLastname.classList.remove('inputError');
        } else {
            inputLastname.classList.add('inputError');
        }
        return valid;
    }

    function validateDNI() {
        var dni = inputDNI.value.trim();
        var valid = dni.length > 7 && !isNaN(dni);

        if (valid == true) {
            inputDNI.classList.remove('inputError');
        } else {
            inputDNI.classList.add('inputError');
        }
        return valid;
    }

    function validateBirthdate() {
        var birthdate = inputBirthdate.value.trim();
        var regex = /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/;
        var valid = birthdate.length == 10 && regex.test(birthdate);

        if (valid == true) {
            inputBirthdate.classList.remove('inputError');
        } else {
            inputBirthdate.classList.add('inputError');
        }
        return valid;
    }

    function validateTelephone() {
        var telephone = inputTelephone.value.trim();
        var valid = telephone.length == 10 && !isNaN(telephone);

        if (valid == true) {
            inputTelephone.classList.remove('inputError');
        } else {
            inputTelephone.classList.add('inputError');
        }
        return valid;
    }

    function validateAddress() {
        var address = inputAddress.value.trim();
        var regex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
        var hasSpaceInBetween = address.indexOf(' ') > 0 && address.indexOf(' ') < address.length;
        var valid = address.length > 4 && hasSpaceInBetween && regex.test(address);

        if (valid == true) {
            inputAddress.classList.remove('inputError');
        } else {
            inputAddress.classList.add('inputError');
        }
        return valid;
    }

    function validateCity() {
        var city = inputCity.value.trim();
        var regex = /[a-zA-Z0-9]/g;
        var valid = city.length > 3 && regex.test(city);

        if (valid == true) {
            inputCity.classList.remove('inputError');
        } else {
            inputCity.classList.add('inputError');
        }
        return valid;
    }

    function validatePostalCode() {
        var postalCode = inputPostalCode.value.trim();
        var valid = postalCode.length >= 4 && postalCode.length <= 5 && !isNaN(postalCode);

        if (valid == true) {
            inputPostalCode.classList.remove('inputError');
        } else {
            inputPostalCode.classList.add('inputError');
        }
        return valid;
    }

    function validateEmail() {
        var email = inputEmail.value.trim();
        var regex = /\S+@\S+\.\S+/;
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
        var valid = password.length >= 8 && regex.test(password);

        if (valid == true) {
            inputPassword.classList.remove('inputError');
        } else {
            inputPassword.classList.add('inputError');
        }
        return valid;
    }

    function validatePasswordRepeat() {
        var passwordRepeat = inputPasswordRepeat.value.trim();
        var valid = validatePassword() && passwordRepeat == inputPassword.value;

        if (valid == true) {
            inputPasswordRepeat.classList.remove('inputError');
        } else {
            inputPasswordRepeat.classList.add('inputError');
        }
        return valid;
    }

    inputName.addEventListener('blur', function () {
        validateName();
    });

    inputLastname.addEventListener('blur', function () {
        validateLastname();
    });

    inputDNI.addEventListener('blur', function () {
        validateDNI();
    });

    inputBirthdate.addEventListener('blur', function () {
        validateBirthdate();
    });

    inputTelephone.addEventListener('blur', function () {
        validateTelephone();
    });

    inputAddress.addEventListener('blur', function () {
        validateAddress();
    });

    inputCity.addEventListener('blur', function () {
        validateCity();
    });

    inputPostalCode.addEventListener('blur', function () {
        validatePostalCode();
    });

    inputEmail.addEventListener('blur', function () {
        validateEmail();
    });

    inputPassword.addEventListener('blur', function () {
        validatePassword();
    });

    inputPasswordRepeat.addEventListener('blur', function () {
        validatePasswordRepeat();
    });


    inputName.addEventListener('focus', function () {
        inputName.classList.remove('inputError');
    });

    inputLastname.addEventListener('focus', function () {
        inputLastname.classList.remove('inputError');
    });

    inputDNI.addEventListener('focus', function () {
        inputDNI.classList.remove('inputError');
    });

    inputBirthdate.addEventListener('focus', function () {
        inputBirthdate.classList.remove('inputError');
    });

    inputTelephone.addEventListener('focus', function () {
        inputTelephone.classList.remove('inputError');
    });

    inputAddress.addEventListener('focus', function () {
        inputAddress.classList.remove('inputError');
    });

    inputCity.addEventListener('focus', function () {
        inputCity.classList.remove('inputError');
    });

    inputPostalCode.addEventListener('focus', function () {
        inputPostalCode.classList.remove('inputError');
    });

    inputEmail.addEventListener('focus', function () {
        inputEmail.classList.remove('inputError');
    });

    inputPassword.addEventListener('focus', function () {
        inputPassword.classList.remove('inputError');
    });

    inputPasswordRepeat.addEventListener('focus', function () {
        inputPasswordRepeat.classList.remove('inputError');
    });

    function submitSignUp() {
        var inputs = {
            name: inputName.value,
            lastName: inputLastname.value,
            dni: inputDNI.value,
            dob: inputBirthdate.value,
            phone: inputTelephone.value,
            address: inputAddress.value,
            city: inputCity.value,
            zip: inputPostalCode.value,
            email: inputEmail.value,
            password: inputPassword.value,
        };

        var queryParamsArray = [];

        for (var input of Object.entries(inputs)) {
            if (input[0] == 'dob') {
                var date = new Date(input[1]);
                input[1] = date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    timeZone: 'UTC',
                });
            }
            queryParamsArray.push(input[0] + '=' + input[1]);
        }

        var queryParams = queryParamsArray.join('&');

        fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?' + queryParams)
            .then((response) => response.json())
            .then((data) => {
                if (data.success == true) {

                    alert('Request was successful!: ' + data.msg);

                    localStorage.setItem('userInfo', JSON.stringify(data.data));

                } else {
                    var errorMessage = '';
                    data.errors.forEach((error) => errorMessage += error.msg + '\n');
                    alert('There was an error:\n' + errorMessage);
                }
            });
    }

    document.getElementById('create').addEventListener('click', function (event) {
        event.preventDefault();

        submitSignUp();
        var inputs = {
            name: validateName(),
            lastName: validateLastname(),
            dni: validateDNI(),
            dob: validateBirthdate(),
            phone: validateTelephone(),
            address: validateAddress(),
            city: validateCity(),
            zip: validatePostalCode(),
            email: validateEmail(),
            password: validatePassword(),
            passwordRepeat: validatePasswordRepeat(),
        };

        var errors = [];

        for (var input of Object.entries(inputs)) {
            var inputName = input[0];
            var inputValid = input[1];

            if (inputValid == false) {
                var errorMessage = document.getElementById(inputName).nextElementSibling.innerText;
                errors.push(errorMessage);
            }
        }

        if (errors.length > 0) {
            alert('ERRORS:\n' + errors.join('\n'));
        } else {

            var accountInfo = '';
            for (var input of Object.entries(inputs)) {
                var inputName = input[0];
                var inputLabel = document.querySelector('label[for="' + inputName + '"]').innerText;
                var inputValue = document.getElementById(inputName).value;

                if (inputName == 'birthdate') {
                    inputValue = new Date(inputValue).toLocaleDateString('es-AR');
                }

                accountInfo += inputLabel + ' ' + inputValue + '\n';
            }

            alert('User created successfully!\n' + accountInfo);
        }
    });

});
