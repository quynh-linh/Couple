import Albums from '@/components/Home/HomeAlbums/HomeAlbums';
import ModernTimeline from '@/components/ModernTimeline/ModernTimeline';
import Banner from '@/components/Banner/Banner';
import NumberOfDays from '@/components/NumberOfDays';
export default function Page() {
  return (
    <>
      <Banner />
      <NumberOfDays />
      <Albums />
      <ModernTimeline />
    </>
  );
}
