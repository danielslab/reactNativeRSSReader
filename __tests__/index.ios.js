
import 'react-native';
import React from 'react';
import Root from '../assets/components/root.js';
import { mockResponse } from 'jest-fetch-mock';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  mockResponse(JSON.stringify([]));
  const tree = renderer.create(
    <Root />
  );
});
