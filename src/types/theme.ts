export interface Theme {
    colors: {
        layout: {
            body: string,
            primary: string,
            secondary: string,
        },
        text: {
            primary: string,
            secondary: string,
            tertiary: string,
        },
    },
    fontSize: {
        tiny:string,
        small:string,
        normal:string,
        medium: string,
        large: string,
        title: string,
    }
};