export interface User {
  name: string;
  username: string;
  logged: boolean;
}

export interface UserInfo {
  name: string;
  username: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserRegister {
  name: string;
  mail: string;
  username: string;
  password: string;
}
