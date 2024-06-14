import { unstable_noStore as noStore } from 'next/cache';
import { OfficeApp } from './components/OfficeApp/OfficeApp';

export default function Home() {
  noStore();

  return (
    <OfficeApp />
  );
}
