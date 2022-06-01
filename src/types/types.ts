export interface UserState {
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

export interface AstroPart {
  id: string;
  name: string;
  type: string;
  framework: string;
  assembled: boolean;
  image: string;
  partimage: string;
}

export interface Astro {
  parts: {
    rocket: string;
    astro: string;
    naut: string;
  };
  id: string;
  name: string;
  type: string;
  flighthistory: boolean;
  stickers: number;
  framework: string;
  assembled: boolean;
}

export interface AstrosState {
  astros: (Astro | AstroPart)[];
}

export interface LoggedCheckerProps {
  children: JSX.Element;
}
