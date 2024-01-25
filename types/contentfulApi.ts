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

export interface Blog {
  fields: {
    titulo: string;
    fotoDePortada: {
      fields: {
        description: string;
        title: string;
        file: {
          contentType: string;
          fileName: string;
          url: string;
          details: {
            size: number;
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    contenido: {
      content: Document[];
    };
  };
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: string;
      };
    };
  };
}
