import StaticDeliveryForm from "@/forms/static-delivery-form/StaticDeliveryForm";

export default function CodePreview() {
  return (
    <>
      <StaticDeliveryForm
        onSave={() => {
          throw new Error("Function not implemented.");
        }}
      
      />
    </>
  );
}
