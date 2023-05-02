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
const OuiIconVisBuilder = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    viewBox="0 0 32 33"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      d="M9 15H5v-1h4v1ZM17 8h-4V7h4v1ZM20 15h-9v-1h9v1ZM28 8h-9V7h9v1Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7v4h-1v-7H3v9h9v1H3a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h7Zm1-6h18v9h-7v-2a1 1 0 0 0-1-1H11V3Z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M19.714 26.286 20.571 28h.858v-.888c0-.34.296-.976.602-1.54.14-.259.281-.502.398-.696.154-.257.264-.427.264-.427.246-.408.45-1.117.45-1.588v-4.046c0-.796-.605-1.445-1.364-1.48a.728.728 0 0 0-.78.74v.295a1.518 1.518 0 0 0-.698-1.282 1.461 1.461 0 0 0-.73-.23.778.778 0 0 0-.714.772v.296a1.481 1.481 0 0 0-.704-1.277 1.383 1.383 0 0 0-.724-.205.728.728 0 0 0-.715.741v.296a1.482 1.482 0 0 0-.702-1.276 1.383 1.383 0 0 0-.726-.205.728.728 0 0 0-.715.74v4.149h-.857v-2.667a1.668 1.668 0 0 0-1 .334c-.432.323-.714.85-.714 1.444v3.089c0 .478.307 1.084.686 1.365 0 0 2.743 1.956 2.743 2.658V28h3.428l.857-1.714Zm-.857-5.143v3.428h.857v-3.428h-.857Zm-.857 0h-.857v3.428H18v-3.428Zm2.572 0v3.428h.857v-3.428h-.857Zm-8.467 4.126-.008-.006-.008-.006a2.74 2.74 0 0 1-.781-.962A2.743 2.743 0 0 1 11 23.089V20c0-1.453 1.109-2.698 2.571-2.774v-.485c0-.927.734-1.741 1.715-1.741.59 0 1.12.21 1.533.556.188-.072.393-.112.61-.112.584 0 1.11.207 1.522.547.17-.07.351-.115.54-.13l.06-.006.06.003c.572.023 1.091.24 1.498.585.187-.07.39-.11.605-.11 1.376 0 2.429 1.146 2.429 2.482v4.046c0 .358-.074.75-.17 1.091-.098.343-.241.712-.425 1.015l-.007.012m-.008.012-.002.003-.01.015-.036.058a17.848 17.848 0 0 0-.547.93c-.15.274-.29.552-.39.79-.076.18-.104.282-.114.32-.005.02-.005.02-.005.005V29h-2.476l-.239-.478-.239.478H14.43v-1.724a2.434 2.434 0 0 0-.168-.202 9.35 9.35 0 0 0-.847-.789 22.704 22.704 0 0 0-1.283-.997l-.02-.015-.006-.004m2.372 2.082-.008-.014.008.014Z"
      clipRule="evenodd"
    />
  </svg>
);
export const icon = OuiIconVisBuilder;
