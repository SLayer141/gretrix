import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <div className="h-96 relative w-full overflow-hidden dark:bg-slate-900 flex flex-col items-center justify-center mb-10">
      <div className="absolute inset-0 w-full h-full dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-xl dark:text-white relative z-20 font-bold"
        )}
      >
        Gretrix App
      </h1>
      <p className="text-center mt-2 dark:text-neutral-300 relative z-20">
        Organize your reading list
      </p>
    </div>
  );
}

export default Hero;
