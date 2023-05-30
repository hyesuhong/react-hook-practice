export interface IUseCoords {
    latitude: number;
    longitude: number;
}
export interface ICoordsError {
    code: number;
    message: string;
}
export declare function useCoords(): {
    loading: boolean;
    coords: IUseCoords | null;
    error: ICoordsError | null;
    getPosition: () => void;
};
