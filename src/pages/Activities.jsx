import AppearSection from "../components/AppearSection.jsx";
import PageHeader from "../components/PageHeader.jsx";

export default function Activities() {
  return (
    <>
      <PageHeader eyebrow="Activities" title="What we have been up to">
        Showcases, playtests and events featuring Ashes of Alengka.
      </PageHeader>

      <section className="flex w-full justify-center bg-alengka-night pb-20 pt-4 sm:pb-28">
        <AppearSection className="flex w-full max-w-3xl flex-col items-center gap-3 px-6">
          <div className="alengka-panel flex w-full flex-col items-center gap-2 p-10 text-center">
            <span className="font-bold text-alengka-gold">Coming soon</span>
            <span className="text-sm text-alengka-cream/60">
              Nothing here yet. Check back later.
            </span>
          </div>
        </AppearSection>
      </section>
    </>
  );
}
