import React from 'react';
// hooks
import { useRouter } from 'next/router';
// components
import Link from 'next/link';
// layouts
import AppLayout from '@components/layouts/AppLayout';

type Props = {};

const CoffeeStore = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <span>CoffeeStore number: {id}</span>
      <Link scroll={false} href='https://google.com'>
        <a>Back to home</a>
      </Link>
    </div>
  );
};
CoffeeStore.layout = AppLayout;

export default CoffeeStore;
