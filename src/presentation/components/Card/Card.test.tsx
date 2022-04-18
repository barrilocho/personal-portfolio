import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component tests', () => {
  const title = 'Card title test';
  const text = 'Card content test';
  const children = <p>{text}</p>;
  const cssClass = 'bg-black';
  beforeEach(() => {
    render(
      <Card cssClass={cssClass} title={title}>
        {children}
      </Card>
    );
  });
  test('should render Card title', () => {
    const header = screen.getByText(title);
    expect(header).toHaveClass('border-b-2 border-gray-200 border-dashed');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(title);
  });
  test('should render Card content', () => {
    const content = screen.getByText(text);
    expect(content).toBeInTheDocument();
    expect(content.textContent).toBe(text);
  });
  test('should extend component classes', () => {
    const title = screen.getByRole('banner');
    expect(title.parentElement).toHaveClass(cssClass);
  });
});
