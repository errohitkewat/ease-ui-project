import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button/Button";

// Default (light) navbar
<Navbar />

// Dark navbar, small size
<Navbar variant="dark" size="sm" />

// Primary navbar, large size
<Navbar variant="primary" size="lg" />

// Glass navbar with animations
<Navbar
  variant="glass"
  animation="slideUp"
  hoverAnimation="scale"
/>

// Custom content using asChild
<Navbar variant="dark">
  <div className="flex items-center justify-between w-full px-4">
    <h1 className="text-lg font-bold">My App</h1>
    <Button variant="primary" size="sm">Sign In</Button>
  </div>
</Navbar>
`;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Navbar</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          The Navbar component is used for site navigation. It supports light,
          dark, primary and glass variants with different sizes and animations.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full max-w-3xl space-y-6">
            <Navbar />
            <Navbar variant="dark" size="sm" />
            <Navbar variant="primary" size="lg" />
            <Navbar variant="glass" animation="none" />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

const propsData = [
  {
    prop: "variant",
    type: '"light" | "dark" | "primary" | "glass"',
    default: '"light"',
    description: "The visual style variant of the Navbar",
  },
  {
    prop: "size",
    type: '"default" | "sm" | "lg" | "xl"',
    default: '"default"',
    description: "The height of the Navbar",
  },
  {
    prop: "animation",
    type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
    default: '"fadeIn"',
    description: "Entrance animation of the Navbar",
  },
  {
    prop: "hoverAnimation",
    type:
      '"jiggle" | "scale" | "bounce" | "shadowPulse" | "float3D" | "wobbleFollow" | "reset" | "none"',
    default: '"none"',
    description: "Hover animation applied to the Navbar",
  },
  {
    prop: "asChild",
    type: "boolean",
    default: "false",
    description: "Merges props onto its child element instead of a nav tag",
  },
];

export default NavbarPage;
