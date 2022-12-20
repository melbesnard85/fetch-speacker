export interface Speaker {
    cell: string;
    dob: {
        age: number;
        data: string;
    };
    email: string;
    gender: string;
    id: {
        name: string;
        value: string;
    };
    location: {
        city: string;
        coordinates: {};
        country: string;
        postcode: string;
        state: string;
    };
    login: {
        username: string;
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
