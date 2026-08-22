import { useState } from "react";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const TooltipPage = () => {
  const [controlledOpen, setControlledOpen] = useState(false);

  const usageCode = `import { Button } from "@/components/Button/Button";
import { Tooltip } from "@/components/Tooltip/Tooltip";

<Tooltip content="I am a tooltip">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip content="Dark tooltip" variant="dark" placement="top">
  <Button variant="dark">Top</Button>
</Tooltip>

<Tooltip content="Light tooltip" variant="light" placement="bottom">
  <Button variant="primary">Bottom</Button>
</Tooltip>

<Tooltip content="Primary tooltip" variant="primary" placement="left" size="lg">
  <Button variant="secondary">Left</Button>
</Tooltip>

<Tooltip content="Outline tooltip" variant="outline" placement="right" arrow={false}>
  <Button variant="outline">Right</Button>
</Tooltip>

<Tooltip
  content={controlledOpen ? "Visible" : "Hidden"}
  open={controlledOpen}
  onOpenChange={setControlledOpen}
  delay={0}
>
  <Button onClick={() => setControlledOpen(!controlledOpen)}>Controlled</Button>
</Tooltip>
`;

  const propsData = [
    {
      prop: "content",
      type: "ReactNode",
      default: "-",
      description: "The content shown inside the tooltip",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The element that triggers the tooltip",
    },
    {
      prop: "placement",
      type: '"top" | "bottom" | "left" | "right"',
      default: '"top"',
      description: "Position of the tooltip relative to the trigger",
    },
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "outline"',
      default: '"dark"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "The size of the tooltip",
    },
    {
      prop: "arrow",
      type: "boolean",
      default: "true",
      description: "Shows an arrow pointing to the trigger",
    },
    {
      prop: "open",
      type: "boolean",
      default: "-",
      description: "Controls tooltip visibility (controlled mode)",
    },
    {
      prop: "defaultOpen",
      type: "boolean",
      default: "false",
      description: "Initial open state when uncontrolled",
    },
    {
      prop: "delay",
      type: "number",
      default: "150",
      description: "Delay in ms before the tooltip appears",
    },
    {
      prop: "leaveDelay",
      type: "number",
      default: "0",
      description: "Delay in ms before the tooltip hides",
    },
    {
      prop: "onOpenChange",
      type: "(open: boolean) => void",
      default: "-",
      description: "Callback when tooltip visibility changes",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The Tooltip component displays a small popup with information when
          users hover or focus on an element.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="I am a tooltip">
            <Button>Hover me</Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variants</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Dark tooltip" variant="dark">
            <Button variant="dark" className="mr-4">
              Dark
            </Button>
          </Tooltip>
          <Tooltip content="Light tooltip" variant="light">
            <Button variant="ghost" className="mr-4">
              Light
            </Button>
          </Tooltip>
          <Tooltip content="Primary tooltip" variant="primary">
            <Button variant="secondary" className="mr-4">
              Primary
            </Button>
          </Tooltip>
          <Tooltip content="Outline tooltip" variant="outline">
            <Button variant="outline">Outline</Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Placements</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Tooltip on top" placement="top">
            <Button className="mx-2">Top</Button>
          </Tooltip>
          <Tooltip content="Tooltip on bottom" placement="bottom">
            <Button className="mx-2">Bottom</Button>
          </Tooltip>
          <Tooltip content="Tooltip on left" placement="left">
            <Button className="mx-2">Left</Button>
          </Tooltip>
          <Tooltip content="Tooltip on right" placement="right">
            <Button className="mx-2">Right</Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sizes</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="Small tooltip" size="sm">
            <Button variant="outline" size="sm" className="mx-2">
              Small
            </Button>
          </Tooltip>
          <Tooltip content="Medium tooltip" size="md">
            <Button variant="outline" className="mx-2">
              Medium
            </Button>
          </Tooltip>
          <Tooltip content="Large tooltip" size="lg">
            <Button variant="outline" size="lg" className="mx-2">
              Large
            </Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Without Arrow & Controlled</h2>
        <ComponentDemo code={usageCode}>
          <Tooltip content="No arrow here" arrow={false}>
            <Button variant="destructive" className="mr-4">
              No Arrow
            </Button>
          </Tooltip>
          <Tooltip
            content={controlledOpen ? "Visible" : "Hidden"}
            open={controlledOpen}
            onOpenChange={setControlledOpen}
            delay={0}
          >
            <Button onClick={() => setControlledOpen(!controlledOpen)}>
              {controlledOpen ? "Hide" : "Show"} Tooltip
            </Button>
          </Tooltip>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
