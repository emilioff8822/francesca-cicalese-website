import FadeIn from "./FadeIn"

export default function SectionLabel({ text }: { text: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-12 md:mb-16">
        <div className="w-10 h-0.5 bg-accent" />
        <span className="text-xs uppercase tracking-[0.15em] text-accent font-medium">
          {text}
        </span>
      </div>
    </FadeIn>
  )
}
