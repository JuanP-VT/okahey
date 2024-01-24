"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Options,
  documentToReactComponents,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import Image from "next/image";
type Props = {
  pregunta: string;
  respuesta: Document[];
};

function AcordeónPreguntaFrecuente({ pregunta, respuesta }: Props) {
  const renderOption: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div>
            <Image
              alt=""
              src={`https:${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
            />
          </div>
        );
      },
    },
  };

  return (
    <Accordion type="single" collapsible className="w-5/6">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-left sm:text-lg">
          {pregunta}
        </AccordionTrigger>
        <AccordionContent className="">
          {respuesta.map((res, index) => (
            <div className="py-2" key={`doc${index}`}>
              {documentToReactComponents(res, renderOption)}
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AcordeónPreguntaFrecuente;
