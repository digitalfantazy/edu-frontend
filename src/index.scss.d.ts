declare namespace IndexScssNamespace {
  export interface IIndexScss {
    container: string;
    "error-input": string;
    "error-message": string;
    grid: string;
    header_wraper: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: IndexScssNamespace.IIndexScss;
};

export = IndexScssModule;
