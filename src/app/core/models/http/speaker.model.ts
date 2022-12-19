export interface Speaker<T> {
    cell: string;
    dob: T[];
    email: string;
    gender: string;
    id: T[];
    location: T[];
    login: T[];
    name: T[];
    nat: string;
    phone: string;
    picture: string;
    registered: T[];
}

export interface SpeakerSt {
    cell: string;
    email: string;
    gender: string;
    nat: string;
    phone: string;
    picture: string;
}

export interface SpeakerMp {
    picture: string;
    name: string;
    email: string;
    gender: string;
    phone: string;
}

export const SPEAKERS: SpeakerMp[] = [
    { picture: "https://randomuser.me/api/portraits/women/21.jpg" , name: 'Hydrogen', email: 'test@test.com', gender: 'male', phone: '+172083789'},
    { picture: "https://randomuser.me/api/portraits/women/21.jpg" , name: 'Helium', email: 'test@test.com', gender: 'male', phone: '+172083789'},
    { picture: "https://randomuser.me/api/portraits/women/21.jpg" , name: 'Lithium', email: 'test@test.com', gender: 'male', phone: '+172083789'},
];