import { render } from '@testing-library/react';
import { DescriptionField } from './DescriptionField';

describe('Test DescriptionField component', () => {
  test('Should render component DescriptionField', () => {
    const component = render(
      <DescriptionField> Test Field Component</DescriptionField>
    );
    const element = component.getByText('Test Field Component');
    expect(element).toBeInTheDocument();
  });
});
