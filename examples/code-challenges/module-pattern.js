const options = {
  username: 'abcd',
  server:   '127.0.0.1'
};

const ConfigObject = ((params) => {

  // return the publicly available things
  // able to use login function at the top of this module since it is hoisted
  return {
    login: login
  };

  const username = params.username || '',
    server       = params.server || '',
    password     = params.password || '';

  function checkPassword() {
    if (this.password === '') {
      console.log('no password!');
      return false;
    }

    return true;
  }

  function checkUsername() {
    if (this.username === '') {
      console.log('no username!');
      return false;
    }

    return true;
  }

  function login() {
    if (checkPassword() && checkUsername()) {
      // perform login
    }
  }

})(options);
