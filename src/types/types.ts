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

export interface Part {
  id: string;
  type: "rocket" | "astro" | "naut";
  framework: "react" | "angular" | "vue" | "jquery";
  assembled: boolean;
}

export interface Astro {
  id: string;
  perfect: boolean;
  parts: Part[];
}

export interface Item {
  type: "part" | "set";
  data: Part | Astro;
}
