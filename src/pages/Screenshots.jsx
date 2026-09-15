import AppearSection from "../components/AppearSection.jsx";
import PageHeader from "../components/PageHeader.jsx";
import ShotGallery from "../components/ShotGallery.jsx";

export default function Screenshots() {
  return (
    <>
      <PageHeader eyebrow="The game" title="Screenshots">
        Straight out of the build. Click any shot to see it full size.
      </PageHeader>

      <section className="flex w-full justify-center bg-alengka-night pb-20 pt-4 sm:pb-28">
        <AppearSection className="flex w-full max-w-5xl flex-col gap-6 px-6">
          <ShotGallery />
        </AppearSection>
      </section>
    </>
  );
}
