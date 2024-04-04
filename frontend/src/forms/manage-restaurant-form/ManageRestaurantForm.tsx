import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required"
    }),

    areaName: z.string({
        required_error: "Area name is required"
    }),

    location: z.string({
        required_error: "Location of your shop is required"
    }),

    estimateDeliveryTime: z.coerce.number(),

    cuisines: z.array(z.string()).nonempty({
        message: "Please select at least one Item"
    }),

    menuItems: z.array(
        z.object({
            name: z.string().min(1, "name is required"),
            price: z.coerce.number().min(1, "price is required"),
        })
    ),

    imageFile: z.instanceof(File, {message: "image is required"}),

});

type RestaurantFormData = z.infer<typeof formSchema>

type Props = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean
}

const ManageRestaurantForm = ({onSave, isLoading}: Props) => {
    const form = useForm<RestaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
           cuisines: [],
           menuItems: [{name:"", price: 0}] 
        },
    });

    const onSubmit = (formDataJson: RestaurantFormData) => {
        const formData = new FormData();
        formData.append("restaurantName", formDataJson.restaurantName);
        formData.append("areaName", formDataJson.areaName);
        formData.append("location", formDataJson.location);
        formData.append("estimateDeliveryTime", formDataJson.estimateDeliveryTime.toString());
        formDataJson.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine)
        });
        formDataJson.menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}][name]`, menuItem.name)
            formData.append(`menuItems[${index}][price]`, (menuItem.price).toString())
        })

    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>
                <Separator/>
                <CuisinesSection/>
                <Separator/>
                <MenuSection/>
                <Separator/>
                <ImageSection/>
                {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )
}

export default ManageRestaurantForm;