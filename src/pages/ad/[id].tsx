import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import AdModule from '@/modules/Ad';

const Ad: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <AdModule id={id} />;
};

export default Ad;
