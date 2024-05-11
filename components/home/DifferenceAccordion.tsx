import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf, Star, Tag, TicketCheck, Truck } from "lucide-react";
import Link from "next/link";

export default function DifferenceAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full mx-auto my-4 lg:w-3/4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <p className="flex items-center gap-2">
            <Leaf />
            <span>Small Batch</span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Unlike many retailers, we never buy and resell plants. Our plants are
          grown in our own indoor facility. From planting to harvest, each crop
          receives a unique quality of care.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <p className="flex items-center gap-2">
            <TicketCheck />
            <span>Inpsired by Science</span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Our grower has a degree in Biology, hands on laboratory experience,
          and an extensive professional background focusing on freshwater
          wetland restoration. This scientific background allows us to push the
          limits of aquarium plant quality.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <p className="flex items-center gap-2">
            <Star />
            <span>Snail Free Guaranteed</span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          At Eden Lab, our plants are strictly grown in our own indoor facility,
          in highly controlled small batches. New species stock is always rid of
          snails and rigorously quarantined before entering production. We
          guarantee our plants to be snail free subject to our refund policy. To
          review our refund policy please{" "}
          <Link href="/policies/refund">click here</Link>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <p className="flex items-center gap-2">
            <Truck />
            <span>Free Shipping over ₹799.00</span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Orders over ₹799.00 ship for FREE! Standard shipping is ₹80. All
          orders are carefully packed to ensure quality is maintained during
          transit. Tracking and email updates are provided so you&apos;ll know
          when your order is delivered. Live arrival guaranteed!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          <p className="flex items-center gap-2">
            <Tag />
            <span>Bulk Orders Receive 15% OFF!</span>
          </p>
        </AccordionTrigger>
        <AccordionContent>
          Orders over ₹2000 automatically receive 15% OFF!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
