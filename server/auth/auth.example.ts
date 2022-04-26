import * as basicAuth from 'express-basic-auth';

const validCredentials = { name: 'a_username', password: 'a_password' };

export default function(user: string, password: string): boolean {
  const credentials = { name: user, pass: password };
  return credentials && check(credentials.name, credentials.pass);
}

function check(name: string, pass: string): boolean {
  let valid = true;
  
  valid = basicAuth.safeCompare(name, validCredentials.name) && valid;
  valid = basicAuth.safeCompare(pass, validCredentials.password) && valid;
  
  return valid;
}
