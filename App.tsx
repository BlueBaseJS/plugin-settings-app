import React from 'react';
import { BlueBaseApp } from '@bluebase/core';
import boot from './bluebase/common/boot'

export default function App() {
  return (
    <BlueBaseApp {...boot} />
  );
}
