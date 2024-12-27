declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    auth_logo: string;
    header__inner: string;
    hello_message: string;
    logo: string;
    logout: string;
    "logout-button": string;
    nav: string;
    nav__item: string;
    nav__link: string;
    nav__list: string;
    profile_icon: string;
    "sign-in-button": string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
