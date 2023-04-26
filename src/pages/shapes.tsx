import Shapes from 'components/Shapes/Shapes';
import { NextPage } from 'next';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const ShapesPage: NextPage = () => {
  return (
    <PageLayout>
      <Shapes />
    </PageLayout>
  );
};

export default ShapesPage;
