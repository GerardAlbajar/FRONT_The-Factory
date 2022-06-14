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
  idRender?: string;
  name: string;
  type: string;
  flighthistory?: boolean;
  stickers?: number;
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
  idRender?: string;
  image: string;
}

export interface Parts {
  rocket?: Part;
  astro?: Part;
  naut?: Part;
}

export interface AstroPerfectProps {
  parts: Parts;
  name: string;
  id: string;
  idRender?: string;
  showIcon: boolean;
}

export interface AstroPartProps {
  name: string;
  id: string;
  idRender: string;
  image: string;
  showIcon: boolean;
  selected?: boolean;
  onSelectItem?(): void;
}

export interface AstrosListProps {
  astros: AstroType[];
  isRemovable?: boolean;
  selectedPartId?: string;
  onSelectItem?(item: AstroPart): void;
}

export interface MyItems {
  astros: AstroPart[];
  nauts: AstroPart[];
  rockets: AstroPart[];
}

export interface MutantAstro {
  astro?: AstroPart;
  naut?: AstroPart;
  rocket?: AstroPart;
  idRender?: string;
  name?: string;
  type?: string;
  flighthistory?: boolean;
  stickers?: number;
  framework?: string;
  assembled?: boolean;
  id?: string;
}

export interface EditAstroState {
  astro: Astro;
}

export interface IUser {
  name: string;
  mail: string;
  username: string;
  id: string;
  inventory: Inventory;
}

export interface Inventory {
  perfect: Astro[];
  part: AstroPart[];
}

export interface UserProps {
  name: string;
  mail: string;
  username: string;
  id: string;
  inventory: Inventory;
}

export interface UserListProps {
  users: IUser[];
}
