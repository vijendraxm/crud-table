export interface IUsersData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}

export const USER_DATA: IUsersData[] = [
    { id: 1, first_name: 'Selena', last_name: 'O\'Hanlon', email: 'sohanlon0@godaddy.com', gender: 'Female', ip_address: '236.198.29.59' },
    { id: 2, first_name: 'Lynsey', last_name: 'Campey', email: 'lcampey1@ucoz.com', gender: 'Female', ip_address: '173.133.99.3' },
    { id: 3, first_name: 'Garrett', last_name: 'Novacek', email: 'gnovacek2@princeton.edu', gender: 'Male', ip_address: '159.36.178.6' },
    { id: 4, first_name: 'Sibyl', last_name: 'Burril', email: 'sburril3@arizona.edu', gender: 'Male', ip_address: '0.114.135.57' },
    { id: 5, first_name: 'Nariko', last_name: 'Lomb', email: 'nlomb4@archive.org', gender: 'Female', ip_address: '4.119.164.45' }
];
