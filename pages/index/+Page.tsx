import clsx from "clsx";
import { createSignal, ParentProps, Setter } from "solid-js";

export default function Index() {
  const [hover, setHover] = createSignal<string>();

  return (
    <>
      <div class="p-8 gap-8 flex flex-col h-screen max-w-5xl mx-auto text-white">
        <div class="p-8 gap-8 flex flex-col items-center text-center">
          <div class="rounded-full h-32 w-32">
            <img src="/up/logo-round.png" class="rounded-full h-full w-full" />
          </div>
          <div class="flex flex-col items-center">
            <div class="text-4xl font-bold">We are Under Pressure!</div>
            <div class="text-xl font-medium">
              a grassroots Splatoon organization creating online events for all
              levels, focusing on entry level players and cultivating the growth
              of the competitive scene
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="px-4 py-1 uppercase text-xl font-semibold rounded-md bg-neutral-800">
              discord
            </div>
            <div class="px-4 py-1 uppercase text-xl font-semibold rounded-md bg-neutral-800">
              calendar
            </div>
          </div>
        </div>
        <div class="p-8 gap-8 grid grid-cols-2 place-items-center h-full grid-rows-3">
          <TourneyButton name="jrsdraft" hover={hover()} setHover={setHover}>
            <img src="jrsdraft/logo.png" class="h-full w-full object-contain" />
          </TourneyButton>
          <TourneyButton name="sail" hover={hover()} setHover={setHover}>
            <img src="sail/title.png" class="h-full w-full object-contain" />
          </TourneyButton>
          <TourneyButton name="ftiu" hover={hover()} setHover={setHover}>
            <img src="ftiu/logo.png" class="h-full w-full object-contain" />
          </TourneyButton>
          <TourneyButton name="throne" hover={hover()} setHover={setHover}>
            <img src="throne/logo.png" class="h-full w-full object-contain" />
          </TourneyButton>
          <TourneyButton name="prism" hover={hover()} setHover={setHover}>
            <img src="prism/title.png" class="h-full w-full object-contain" />
          </TourneyButton>
          <TourneyButton name="periphery" hover={hover()} setHover={setHover}>
            <div class="h-full w-full flex flex-col items-center justify-center text-3xl">
              periphery
            </div>
          </TourneyButton>
        </div>
      </div>
    </>
  );
}

const TourneyButton = (
  props: ParentProps<{
    hover?: string;
    setHover: Setter<string | undefined>;
    name: string;
  }>
) => {
  return (
    <>
      <a
        href={"/" + props.name}
        onmouseenter={() => props.setHover(props.name)}
        onmouseleave={() => props.setHover()}
        class="relative rounded-xl overflow-clip w-full h-full hover:scale-105 transition-transform duration-500 rounded-md"
      >
        <div class="h-0 min-h-full p-4">{props.children}</div>
        <Background
          hover={props.hover ? undefined : props.name}
          name={props.name}
          static
        />
      </a>
      <Background hover={props.hover} name={props.name} />
    </>
  );
};

const Background = (props: {
  hover?: string;
  name: string;
  static?: boolean;
}) => (
  <video
    src={`/${props.name}/bg.webm`}
    muted
    loop={!props.static}
    autoplay={!props.static}
    preload={props.static ? "metadata" : "auto"}
    class={clsx(
      "absolute inset-0 h-full w-full object-cover -z-[100] transition-opacity duration-500 brightness-50",
      props.hover === props.name ? "opacity-100" : "opacity-0"
    )}
  />
);
