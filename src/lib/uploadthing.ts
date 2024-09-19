import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

console.log('Reach Here 2')

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
