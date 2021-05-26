import StorageAPI from './StorageAPI';
export declare type QueryStoreItem = {
    query?: string;
    variables?: string;
    headers?: string;
    operationName?: string;
    label?: string;
    favorite?: boolean;
};
export default class QueryStore {
    private key;
    private storage;
    private maxSize;
    items: Array<QueryStoreItem>;
    constructor(key: string, storage: StorageAPI, maxSize?: number | null);
    get length(): number;
    contains(item: QueryStoreItem): boolean;
    edit(item: QueryStoreItem): void;
    delete(item: QueryStoreItem): void;
    fetchRecent(): QueryStoreItem;
    fetchAll(): QueryStoreItem[];
    push(item: QueryStoreItem): void;
    save(): void;
}
//# sourceMappingURL=QueryStore.d.ts.map