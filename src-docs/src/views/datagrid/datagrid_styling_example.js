import React, { Fragment } from 'react';

import { renderToHtml } from '../../services';

import { GuideSectionTypes } from '../../components';
import { EuiDataGrid, EuiCode, EuiCodeBlock } from '../../../../src/components';

import DataGridContainer from './container';
const dataGridContainerSource = require('!!raw-loader!./container');
const dataGridContainerHtml = renderToHtml(DataGridContainer);

import DataGridStyling from './styling';
const dataGridStylingSource = require('!!raw-loader!./styling');
const dataGridStylingHtml = renderToHtml(DataGridStyling);

import DataGridControls from './additional_controls';
const dataGridControlsSource = require('!!raw-loader!./additional_controls');
const dataGridControlsHtml = renderToHtml(DataGridControls);

import { DataGridStyle, DataGridToolbarVisibilityOptions } from './props';

const gridSnippet = `<EuiDataGrid
  {...usualProps}
  // This can work as a shape.
  toolbarVisibility={{
    showColumnSelector: false
    showStyleSelector: false
    showSortSelector: false
    showFullScreenSelector: false
    additionalControls: (
      <Fragment>
        <EuiButtonEmpty
          size="xs"
          iconType="bell"
          color="text"
          className="euiDataGrid__controlBtn"
          onClick={() => alert('You clicked me! Hugs.')}>
          New button
        </EuiButtonEmpty>
        <EuiButtonEmpty
          size="xs"
          iconType="branch"
          color="text"
          className="euiDataGrid__controlBtn"
          onClick={() => alert('You clicked me! Hugs.')}>
          Another button
        </EuiButtonEmpty>
      </Fragment>
    )
  }}
  // Or as a boolean to turn everything off.
  toolbarVisibility={false}
  // Change the initial style of the grid.
  gridStyle={{
    border: 'all',
    stripes: true,
    rowHover: 'highlight',
    header: 'shade',
    // If showStyleSelector={true} from toolbarVisibility, these last two will be superceded by what the user decides.
    fontSize: 'm',
    cellPadding: 'm',
  }}
/>
`;

const controlsSnippet = `<EuiDataGrid
  {...usualGridProps}
  toolbarVisibility={{
    // Use of a fragment for multiple items will insure proper margins
    additionalControls: (
      <Fragment>
        <EuiButtonEmpty
          size="xs"
          iconType="bell"
          color="text"
          className="euiDataGrid__controlBtn"
          onClick={() => alert('You clicked me! Hugs.')}>
          New button
        </EuiButtonEmpty>
        <EuiButtonEmpty
          size="xs"
          iconType="branch"
          color="text"
          className="euiDataGrid__controlBtn"
          onClick={() => alert('You clicked me! Hugs.')}>
          Another button
        </EuiButtonEmpty>
      </Fragment>
    )
  }}
/>
`;

export const DataGridStylingExample = {
  title: 'Data grid styling and toolbar',
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: dataGridStylingSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: dataGridStylingHtml,
        },
      ],
      text: (
        <Fragment>
          <p>
            Styling can be passed down to the grid through the{' '}
            <EuiCode>gridStyle</EuiCode> prop. It accepts an object that allows
            for customization.
          </p>
          <p>
            The <EuiCode>toolbarVisibility</EuiCode> prop when used as a boolean
            controls the visibility of the toolbar displayed above the grid.
            Using the prop as a shape, allows setting the visibility of the
            individual buttons within.
          </p>
          <p>
            With the default settings, the <EuiCode>showStyleSelector</EuiCode>{' '}
            setting in <EuiCode>toolbarVisibility</EuiCode> means the user has
            the ability to override the padding and font size passed into{' '}
            <EuiCode>gridStyle</EuiCode> by the engineer.
          </p>
          <EuiCodeBlock language="javascript" paddingSize="s" isCopyable>
            {gridSnippet}
          </EuiCodeBlock>
        </Fragment>
      ),
      components: { DataGridStyling },

      props: {
        EuiDataGrid,
        EuiDataGridStyle: DataGridStyle,
        EuiDataGridToolbarVisibilityOptions: DataGridToolbarVisibilityOptions,
      },
      demo: <DataGridStyling />,
    },
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: dataGridContainerSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: dataGridContainerHtml,
        },
      ],
      title: 'Data grid adapts to its container',
      text: (
        <p>
          When wrapped inside a container, like a dashboard panel, the grid will
          start hiding controls and adopt a more strict flex layout
        </p>
      ),
      components: { DataGridContainer },

      demo: <DataGridContainer />,
    },
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: dataGridControlsSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: dataGridControlsHtml,
        },
      ],
      title: 'Additional controls in the toolbar',
      text: (
        <p>
          Use the <EuiCode>toolbarVisibility.additionalControls</EuiCode> prop
          to pass additional controls to the toolbar. These will always live to
          the left of the full screen button. It will respect the{' '}
          <EuiCode>toolbarVisibility={'{false}'}</EuiCode> setting and hide when
          appropriate. Although any node can fit in this space, the
          recommendation is to use
          <EuiCode>EuiButtonEmpty</EuiCode> components with the configuration
          shown in the snippet.
        </p>
      ),
      components: { DataGridControls },
      snippet: controlsSnippet,
      demo: <DataGridControls />,
    },
  ],
};