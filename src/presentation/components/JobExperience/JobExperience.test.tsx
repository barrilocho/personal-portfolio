import { render } from '@testing-library/react';
import JobExperience from './JobExperience';

describe('Test DescriptionField component', () => {
  test('Should render component DescriptionField', () => {
    const component = render(<JobExperience />);
    const element = component.getByText('JobExperience');
    expect(element).toBeInTheDocument();
  });
  test('Should render company name', () => {
    const companyName = 'Aleate';
    const component = render(<JobExperience companyName={companyName}/>);'
    const element = component.getByText(companyName);
    expect(element).toBeInTheDocument();
  });
  test('Should render job description', () => {
    const jobDescription = 'Test job description';
    const component = render(<JobExperience jobDescription={jobDescription}/>);
    const element = component.getByText(jobDescription);
    expect(element).toBeInTheDocument();
  });
  test('Should render work time', () => {
    const workTime = 'Test work time';
    const component = render(<JobExperience workTime={workTime}/>);
    const element = component.getByText(workTime);
    expect(element).toBeInTheDocument();
  });
  test('Should render company logo', () => {
    const companyLogo = '/img/aleate_logo.png';
    const component = render(<JobExperience companyLogo={companyLogo}/>); 
    const element = component.getByAltText('Aleate logo');
    expect(element).toBeInTheDocument();
  });

});
