import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  pregunta: string;
  respuesta: string;
};
function AcordeónPreguntasFrecuentes({ pregunta, respuesta }: Props) {
  return (
    <Accordion type="single" collapsible className="w-5/6">
      <AccordionItem value="item-1">
        <AccordionTrigger>{pregunta}</AccordionTrigger>
        <AccordionContent>{respuesta}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AcordeónPreguntasFrecuentes;
