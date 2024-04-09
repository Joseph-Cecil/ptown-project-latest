import { useCreateMyRestaurant, useUpdateRestaurant } from "@/api/MyRestuarantApi";
import { useGetMyRestaurant } from "@/api/MyUserApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
    const {createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant(); 
    const {restaurant} = useGetMyRestaurant();
    const {updateRestaurant, isLoading: isUpdateLaoding} = useUpdateRestaurant();

    const isEditing = !!restaurant;

    return <ManageRestaurantForm restaurant={restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLaoding}/>
}

export default ManageRestaurantPage;