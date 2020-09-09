const validateField = (fieldType, value) => {
  switch (fieldType) {
    case "email":
      {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(value).toLowerCase()),"email");
        return re.test(String(value).toLowerCase());
      }
    case "password":
      {
        console.log( value.length>8,"password");
        return value.length>8;
      }
    case "name":
      {
        console.log(/^[a-zA-Z ]+$/.test(value), "name");
          return /^[a-zA-Z ]+$/.test(value)
      }
  }
};


export default validateField;
