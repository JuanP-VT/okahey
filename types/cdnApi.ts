import { Document } from "@contentful/rich-text-types";

export interface PreguntaFrecuente {
  fields: {
    pregunta: string;
    respuesta: {
      content: Document[];
    };
  };
  sys: {
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
}
