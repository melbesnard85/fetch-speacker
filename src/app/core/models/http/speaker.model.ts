export interface Speaker {
    cell: string;
    dob: {
        age: number;
        date: string;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: string | null;
    };
    location: {
        street: {};
        city: string;
        coordinates: {};
        country: string;
        postcode: string | number;
        state: string;
        timezone: {};
    };
    login: {
        username: string;
        uuid: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    name: {
        first: string;
        last: string;
        title: string;
    };
    nat: string;
    phone: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {};
}
