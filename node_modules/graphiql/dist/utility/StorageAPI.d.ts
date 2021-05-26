export interface Storage {
    getItem: (key: string) => string | null;
    removeItem: (key: string) => void;
    setItem: (key: string, value: string) => void;
    length: number;
}
export default class StorageAPI {
    storage: Storage | null;
    constructor(storage?: Storage);
    get(name: string): string | null;
    set(name: string, value: string): {
        isQuotaError: boolean;
        error: any;
    };
}
//# sourceMappingURL=StorageAPI.d.ts.map