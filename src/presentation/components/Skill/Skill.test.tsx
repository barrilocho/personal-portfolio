import { render, screen } from '@testing-library/react';
import Skill from './Skill';

describe('Test Skill component', () => {
  const skillName = 'JavaScript';
  const skillSrc = '/img/javascript.png';
  test('renders correctly', () => {
    render(<Skill src={skillSrc} name={skillName} />);
  });
  test('should render skill name and image', () => {
    render(<Skill name={skillName} src={skillSrc} />);
    expect(screen.getByText(skillName)).toBeInTheDocument();
    expect(screen.getByAltText(`${skillName} logo`)).toBeInTheDocument();
  });
  test('should render skill rounded', () => {
    render(<Skill name={skillName} rounded src={skillSrc} />);
    const skill = screen.getByText(skillName);
    expect(skill.parentElement).toHaveClass('rounded-3xl');
  });
});
