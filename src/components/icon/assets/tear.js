/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import * as React from 'react';
const OuiIconTear = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.553 1.776a.5.5 0 0 1 .894 0l4 8a.5.5 0 0 1 .053.235c-.004.15-.026.396-.084.705a5.538 5.538 0 0 1-.505 1.512C11.189 13.638 9.906 14.5 8 14.5c-1.906 0-3.19-.862-3.91-2.272a5.538 5.538 0 0 1-.506-1.512 4.672 4.672 0 0 1-.084-.705.5.5 0 0 1 .053-.235l4-8Zm-3.046 8.329c.009.106.027.253.06.429.079.424.213.848.413 1.238C5.537 12.862 6.487 13.5 8 13.5c1.513 0 2.463-.638 3.02-1.728.2-.39.334-.814.413-1.238.033-.176.051-.323.06-.43L8 3.119l-3.493 6.987Z" />
  </svg>
);
export const icon = OuiIconTear;
