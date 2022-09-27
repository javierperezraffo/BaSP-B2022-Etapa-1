document.addEventListener('DOMContentLoaded', function() {
    var inputName = document.getElementById('name');
    var inputLastname = document.getElementById('lastname');
    var inputDNI = document.getElementById('dni');
    var inputBirthdate = document.getElementById('birthdate');
    var inputTelephone = document.getElementById('telephone');
    var inputAddress = document.getElementById('address');
    var inputCity = document.getElementById('city');
    var inputPostalCode = document.getElementById('postalCode');
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
        var regex = /(\d+)/g;
        var valid = dni.length > 7 && regex.test(dni);
        if (valid == true) {
            inputDNI.classList.remove('inputError');
        } else {
            inputDNI.classList.add('inputError');
        }
        return valid;
    }
    function validateBirthdate() {
        var birthdate = inputBirthdate.value.trim();
        var valid = birthdate.length == 10;
        if (valid == true) {
            inputBirthdate.classList.remove('inputError');
        } else {
            inputBirthdate.classList.add('inputError');
        }
        return valid;
    }
    function validateTelephone() {
        var telephone = inputTelephone.value.trim();
        var regex = /(\d+)/g;
        var valid = telephone.length == 10 && regex.test(telephone);

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
        var regex = /^(\d+)/g;
        var valid = postalCode.length >= 4 && postalCode.length <= 5 && regex.test(postalCode);

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
    inputName.addEventListener('blur', function() {
        validateName();
    });
    inputLastname.addEventListener('blur', function() {
        validateLastname();
    });
    inputDNI.addEventListener('blur', function() {
        validateDNI();
    });
    inputBirthdate.addEventListener('blur', function() {
        validateBirthdate();
    });
    inputTelephone.addEventListener('blur', function() {
        validateTelephone();
    });
    inputAddress.addEventListener('blur', function() {
        validateAddress();
    });
    inputCity.addEventListener('blur', function() {
        validateCity();
    });
    inputPostalCode.addEventListener('blur', function() {
        validatePostalCode();
    });
    inputEmail.addEventListener('blur', function() {
        validateEmail();
    });
    inputPassword.addEventListener('blur', function() {
        validatePassword();
    });
    inputPasswordRepeat.addEventListener('blur', function() {
        validatePasswordRepeat();
    });
    inputName.addEventListener('focus', function() {
        inputName.classList.remove('inputError');
    });
    inputLastname.addEventListener('focus', function() {
        inputLastname.classList.remove('inputError');
    });
    inputDNI.addEventListener('focus', function() {
        inputDNI.classList.remove('inputError');
    });
    inputBirthdate.addEventListener('focus', function() {
        inputBirthdate.classList.remove('inputError');
    });
    inputTelephone.addEventListener('focus', function() {
        inputTelephone.classList.remove('inputError');
    });
    inputAddress.addEventListener('focus', function() {
        inputAddress.classList.remove('inputError');
    });
    inputCity.addEventListener('focus', function() {
        inputCity.classList.remove('inputError');
    });
    inputPostalCode.addEventListener('focus', function() {
        inputPostalCode.classList.remove('inputError');
    });
    inputEmail.addEventListener('focus', function() {
        inputEmail.classList.remove('inputError');
    });
    inputPassword.addEventListener('focus', function() {
        inputPassword.classList.remove('inputError');
    });
    inputPasswordRepeat.addEventListener('focus', function() {
        inputPasswordRepeat.classList.remove('inputError');
    });
    document.getElementById('create').addEventListener('click', function(event) {
        event.preventDefault();
        var inputs = {
            name: validateName(),
            lastname: validateLastname(),
            dni: validateDNI(),
            birthdate: validateBirthdate(),
            telephone: validateTelephone(),
            address: validateAddress(),
            city: validateCity(),
            postalCode: validatePostalCode(),
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
                accountInfo += inputLabel + ' ' + inputValue + '\n';
            }
            alert('User created successfully!\n' + accountInfo);
        }
    });
});