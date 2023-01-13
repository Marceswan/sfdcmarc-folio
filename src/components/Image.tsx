export default function Image(props: ImageProps) {
  return (
    <div className="relative w-[1440px] h-[6332px]" style={props.style}>
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/ac96a2a0f419458dae644aae7dab40595a4fd19c.webp)_center_/_cover] inset-x-0 top-3/4 bottom-0 absolute w-[1440px]"
       />
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/14bab4fc45b7ceb6da02a8d96edb78f5d6c3cbd6.webp)_center_/_cover] inset-x-0 top-1/2 bottom-1/4 absolute w-[1440px]"
       />
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/1e8324e17ed97cf688be9aaace3591640b4feb31.webp)_center_/_cover] inset-x-0 top-1/4 bottom-1/2 absolute w-[1440px]"
       />
      <div
        className="[background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/ec1aa0dbb530b844e1654f4178bb9ec5879fbe8e.webp)_center_/_cover] inset-x-0 top-0 bottom-3/4 absolute w-[1440px]"
       />
    </div>
  );
}

Image.defaultProps = {
  style: {},
};

interface ImageProps {
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
