"use client";

import { IDocumentos } from "@/interfaces/IDocumentos";
import { createImageUseCase } from "@/modules/Imagenes/usecases/createImageUseCase";
import Image from "next/image";
import { Suspense, useRef } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

export const ImageUpload = ({ documento }: { documento: IDocumentos }) => {
  const router = useRouter();
  const fileInputRef = useRef<any>(null);

  const { mutate, isLoading } = useMutation(
    async ({ documento, imageFile }: { documento: IDocumentos; imageFile: File }) => {
      return createImageUseCase({ documento, imageFile });
    },
    {
      onSuccess: () => {
        router.refresh();
      },
      onError: () => {
        alert("Error al subir la imagen");
      },
    }
  );

  const handleFileChange = async (event: any) => {
    mutate({ documento, imageFile: event.target.files[0] });
  };

  const handleUpload = async () => {
    if (fileInputRef) {
      fileInputRef?.current?.click();
    }
  };

  if (isLoading) {
    return (
      <div className="h-96 w-96 bg-gray-600 flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {!documento.imageUrl ? (
        <div className="h-96 w-96 bg-gray-600 flex items-center justify-center hover:cursor-pointer">
          <Image onClick={handleUpload} src="/svg/add-image.svg" alt={"No imagen disponible"} width={96} height={96} className="hover:scale-105 transition-all" />
        </div>
      ) : (
        <div className="h-96 w-96 flex items-center justify-center ">
          <Suspense fallback={<>Loading...</>}>
            <Image src={documento.imageUrl} alt={"Imagen"} width={384} height={384} className="hover:scale-105 transition-all" />
          </Suspense>
        </div>
      )}

      <input hidden ref={fileInputRef} type="file" onChange={handleFileChange} accept="image/*" />
    </div>
  );
};
