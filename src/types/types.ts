export type AstroType = Astro | AstroPart;

export interface UserState {
  name: string;
  username: string;
  logged: boolean;
  id: string;
}

export interface UserInfo {
  name: string;
  username: string;
  id: string;
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
  flighthistory: number;
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
  showIcon: boolean;
}

export interface AstroPartProps {
  name: string;
  id: string;
  idRender: string;
  image: string;
  showIcon: boolean;
}

export interface AstrosListProps {
  astros: AstroType[];
  isRemovable?: boolean;
}
