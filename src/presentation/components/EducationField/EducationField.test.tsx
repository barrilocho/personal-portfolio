import { render, RenderResult } from '@testing-library/react';
import { EducationField } from './EducationField';

describe('Test Education Field component', () => {
  const institutionName = 'Universidad Panamericana';
  const title = 'Test job description';
  const dateDescription = 'Test work time';
  const institutionLogo = '/img/aleate_logo.png';

  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <EducationField
        institutionLogo={institutionLogo}
        title={title}
        dateDescription={dateDescription}
        institutionName={institutionName}
      />
    );
  });
  test('Should render institution name', () => {
    const element = component.getByText(institutionName);
    expect(element).toBeInTheDocument();
  });
  test('Should render title', () => {
    const element = component.getByText(title);
    expect(element).toBeInTheDocument();
  });
  test('Should render date description', () => {
    const element = component.getByText(dateDescription);
    expect(element).toBeInTheDocument();
  });
  test('Should render institution logo', () => {
    const element = component.getByAltText(`${institutionName} logo`);
    expect(element).toBeInTheDocument();
  });
});
