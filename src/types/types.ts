export type AstroType = Astro | AstroPart;

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
  idRender: string;
  name: string;
  type: string;
  framework: string;
  assembled: boolean;
  image: string;
  partimage: string;
}

export interface Astro {
  parts: Parts;
  id: string;
  idRender: string;
  name: string;
  type: string;
  flighthistory: boolean;
  stickers: number;
  framework: string;
  assembled: boolean;
}

export interface AstrosState {
  astros: AstroType[];
}

export interface LoggedCheckerProps {
  children: JSX.Element;
}

export interface Part {
  id: string;
  idRender: string;
  image: string;
}

export interface Parts {
  rocket: Part;
  astro: Part;
  naut: Part;
}

export interface AstroPerfectProps {
  parts: Parts;
  name: string;
  id: string;
  idRender: string;
}

export interface AstroPartProps {
  name: string;
  id: string;
  idRender: string;
  image: string;
}

export interface AstrosListProps {
  astros: AstroType[];
}
