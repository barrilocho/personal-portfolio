import { render } from '@testing-library/react';
import { FaCode } from 'react-icons/fa';
import { DescriptionField } from './DescriptionField';

describe('Test DescriptionField component', () => {
  test('Should render component DescriptionField', () => {
    const component = render(
      <DescriptionField
        text="Test Field Component"
        icon={<FaCode className="mr-2" />}
      />
    );
    const element = component.getByText('Test Field Component');
    expect(element).toBeInTheDocument();
  });
  test('Should render component DescriptionField with children', () => {
    const component = render(
      <DescriptionField
        text="Test Field Component"
        icon={<FaCode className="mr-2" />}
        link="https://www.google.com"
      />
    );
    const element = component.getByText('Test Field Component');
    expect(element).toBeInTheDocument();
  });
  test('Should render link field', () => {
    const component = render(
      <DescriptionField
        text="Test Field Component"
        icon={<FaCode className="mr-2" />}
        link="https://www.google.com"
      />
    );
    const element = component.getByText('Test Field Component');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', 'https://www.google.com');
    expect(element).toHaveAttribute('target', '_blank');
    expect(element);
  });
  test('Should render children', () => {
    const component = render(
      <DescriptionField>
        <div>Test Field Component</div>
      </DescriptionField>
    );
    const element = component.getByText('Test Field Component');
    expect(element).toBeInTheDocument();
  });
});
