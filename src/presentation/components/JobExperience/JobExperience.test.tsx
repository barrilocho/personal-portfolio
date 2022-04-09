import { render, RenderResult } from '@testing-library/react';
import JobExperience from './JobExperience';

describe('Test JobExperience component', () => {
  const companyName = 'Aleate';
  const jobTitle = 'Test job description';
  const workTime = 'Test work time';
  const companyLogo = '/img/aleate_logo.png';
  const place = 'Test place';
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <JobExperience
        workTime={workTime}
        companyName={companyName}
        companyLogo={companyLogo}
        jobTitle={jobTitle}
      />
    );
  });
  test('Should render company name', () => {
    const element = component.getByText(companyName);
    expect(element).toBeInTheDocument();
  });
  test('Should render job description', () => {
    const element = component.getByText(jobTitle);
    expect(element).toBeInTheDocument();
  });
  test('Should render work time', () => {
    const element = component.getByText(workTime);
    expect(element).toBeInTheDocument();
  });
  test('Should render company logo', () => {
    const element = component.getByAltText('Aleate logo');
    expect(element).toBeInTheDocument();
  });
});
