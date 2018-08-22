import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { StateLink } from '../state-link/state-link';

export const Breadcrumbs = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem>
        <StateLink to="/">Home</StateLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <StateLink to="/breeds">Breeds</StateLink>
      </BreadcrumbItem>
      <BreadcrumbItem active>Data</BreadcrumbItem>
    </Breadcrumb>
  </div>
);
