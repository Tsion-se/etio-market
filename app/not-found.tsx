import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-medium text-accent-ink">Error 404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-ink">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-3 text-ink-2">
        The listing may have been removed, or the link is incorrect.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/products">Browse products</ButtonLink>
        <ButtonLink href="/" variant="secondary">
          Go to home
        </ButtonLink>
      </div>
    </div>
  );
}
