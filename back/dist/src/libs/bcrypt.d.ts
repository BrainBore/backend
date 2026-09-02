export declare const encrypt: (password: string, salt?: number) => Promise<string>;
export declare const compare: (password: string, hash: string) => Promise<boolean>;
