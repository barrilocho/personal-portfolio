import { render } from '@testing-library/react';
import JobField from './JobField';

describe('Test DescriptionField component', () => {
  test('Should render component DescriptionField', () => {
    const component = render(<JobField />);
    const element = component.getByText('JobField');
    expect(element).toBeInTheDocument();
  });
});
