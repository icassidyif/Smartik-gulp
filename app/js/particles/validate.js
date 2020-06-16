$("#phone").mask("+38 (999) 999-99-99");

$.validator.addMethod('customphone', function (value, element) {
  return this.optional(element) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(value);
}, "Please enter a valid phone number");

$('#callMeForm').validate({
  rules: {
    phone: {
      required: true,
      customphone: true
    }
  },
  messages: {
    phone: {
      required: "Це обов'язкове поле",
      customphone: 'Невірний номер телефону'
    }
  },
  submitHandler: function (form) {
    let url = 'https://addvin.fapi.space/mail.php';
    let formData = $(form).serializeArray();
    ajaxSend(formData, url);
    form.reset();
    $.magnificPopup.close();
  }
});


$('#gardenForm').validate({
  rules: {
    parentName: {
      required: true,
      minlength: 2
    },
    parentSurname: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      customphone: true
    },
    childName: {
      required: true,
      minlength: 2
    },
    childSurname: {
      required: true,
      minlength: 2
    },
    age: {
      required: true,
      number: true
    }
  },
  messages: {
    parentName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    parentSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    phone: {
      required: "Це обов'язкове поле",
      customphone: 'Невірний номер телефону'
    },
    childName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    childSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    age: {
      required: "Це обов'язкове поле",
      number: 'Введіть число'
    }
  },
  submitHandler: function (form) {
    let url = 'https://addvin.fapi.space/mail.php';
    let formData = $(form).serializeArray();
    ajaxSend(formData, url);
    form.reset();
    $.magnificPopup.close();
  }
});


$('#campForm').validate({
  rules: {
    parentName: {
      required: true,
      minlength: 2
    },
    parentSurname: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      customphone: true
    },
    childName: {
      required: true,
      minlength: 2
    },
    childSurname: {
      required: true,
      minlength: 2
    },
    age: {
      required: true,
      number: true
    }
  },
  messages: {
    parentName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    parentSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    phone: {
      required: "Це обов'язкове поле",
      customphone: 'Невірний номер телефону'
    },
    childName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    childSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    age: {
      required: "Це обов'язкове поле",
      number: 'Введіть число'
    }
  },
  submitHandler: function (form) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let formData = $(form).serializeArray();
    ajaxSend(formData, url);
    form.reset();
    $.magnificPopup.close();
  }
});


$('#languagesForm').validate({
  rules: {
    parentName: {
      required: true,
      minlength: 2
    },
    parentSurname: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      customphone: true
    },
    childName: {
      required: true,
      minlength: 2
    },
    childSurname: {
      required: true,
      minlength: 2
    },
    age: {
      required: true,
      number: true
    }
  },
  messages: {
    parentName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    parentSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    phone: {
      required: "Це обов'язкове поле",
      customphone: 'Невірний номер телефону'
    },
    childName: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке ім'я"
    },
    childSurname: {
      required: "Це обов'язкове поле",
      minlength: "Надто коротке прізвище"
    },
    age: {
      required: "Це обов'язкове поле",
      number: 'Введіть число'
    }
  },
  submitHandler: function (form) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let formData = $(form).serializeArray();
    ajaxSend(formData, url);
    form.reset();
    $.magnificPopup.close();
  }
})