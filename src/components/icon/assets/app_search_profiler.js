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
const OuiIconAppSearchProfiler = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.63 8h7.38v2h-7.38z" className="ouiIcon__fillSecondary" />
    <path d="M7 8h3.19v2H7z" />
    <path d="M7 16h7.38v2H7z" className="ouiIcon__fillSecondary" />
    <path d="M15.81 16H19v2h-3.19zM7 12h9v2H7z" />
    <path d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13 13-5.82 13-13A13 13 0 0 0 13 0Zm0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11-4.925 11-11 11ZM22.581 23.993l1.414-1.414 7.708 7.708-1.414 1.414z" />
  </svg>
);
export const icon = OuiIconAppSearchProfiler;
