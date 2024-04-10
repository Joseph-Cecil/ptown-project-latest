import {
  useCreateMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestuarantApi";
import { useGetMyRestaurant } from "@/api/MyUserApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateMyRestaurant, isLoading: isUpdateLaoding } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateMyRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLaoding}
    />
  );
};

export default ManageRestaurantPage;
