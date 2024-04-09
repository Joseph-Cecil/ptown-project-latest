import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant = () => {
    const {getAccessTokenSilently} = useAuth0();

    const getMyRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        });

        if(!response.ok) {
            throw new Error("Failed to get Shop");
        }

        return response.json();
    };

    const {data: restaurant, isLoading} = useQuery(
        "fetchMyRestaurant",
        getMyRestaurantRequest
    );

    return {restaurant, isLoading};
}

export const useCreateMyRestaurant = () => {
    const {getAccessTokenSilently} = useAuth0();

    const createMyRestuarantRequest = async(restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
        });
        if(!response.ok) {
            throw new Error("Failed to create shop")
        }

        return response.json();
    };

    const {mutate: createRestaurant, isLoading, isSuccess, error} = useMutation(createMyRestuarantRequest);

    if(isSuccess) {
        toast.success("Shop Created Successfully");
    }

    if(error){
        toast.error("Unable to update Shop");
    }

    return {createRestaurant, isLoading}
}

export const useUpdateRestaurant = () => {
    const {getAccessTokenSilently} = useAuth0();

    const updateRestaurantRequest = async (restaurantFormData: FormData): Promise<Restaurant> => {
        const accessToken = getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: restaurantFormData,
        });

        if(!response) {
            throw new Error("Failed to Update Shop");
        }

        return response.json();
    }

    const {mutate: updateRestaurant, isLoading, error, isSuccess} = useMutation(updateRestaurantRequest);

    if(isSuccess){
        toast.success("Shop Updated");
    }

    if (error) {
        toast.error("Unable to update Shop");
    } 

    return {updateRestaurant, isLoading}
}