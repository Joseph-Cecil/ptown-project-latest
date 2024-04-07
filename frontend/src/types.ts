export type User = {
    _id: string;
    email: string;
    name: string;
    phoneNumber: string;
    areaName: string;
    streetName: string;
    houseNumber: string
}

export type MenuItem = {
    _id:string;
    name: string;
    price: number;
}

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    areaName: string;
    location: string;
    estimateDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
}