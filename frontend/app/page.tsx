import { getHomeData } from '@/server/home';
import HomeClient from '@/components/HomeClient';

export default async function Home() {
  const { packages, services } = await getHomeData({ webs: true });

  return <HomeClient services={services} packages={packages} />;
}
