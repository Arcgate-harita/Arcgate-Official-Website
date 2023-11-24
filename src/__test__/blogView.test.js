import React from 'react';
import { render, screen , waitFor} from '@testing-library/react';
import { MemoryRouter, BrowserRouter as Router } from 'react-router-dom';
import BlogView from '../Blog_view'; 
import imagePath from '../imagePath';



test('renders Blog_view component',  () => {
    render(
      <MemoryRouter>
        <BlogView />
      </MemoryRouter>
    );
  
      const blogViewContainer = screen.getByTestId('blogView-container');
      expect(blogViewContainer).toBeInTheDocument();
  
      // Additional assertions...
      const articleElement = screen.getByRole('article');
      expect(articleElement).toBeInTheDocument();
  
      const section1 = screen.getByTestId('blogView-section1');
      expect(section1).toBeInTheDocument();
  
      const content1 = screen.getByTestId('blogViw-content1');
      expect(content1).toBeInTheDocument();
    });

  

test('renders Blog_view component', () => {
    render(<MemoryRouter><BlogView /> </MemoryRouter>);
    
    // Replace these assertions with the actual elements you expect in your component
    const articleElement = screen.getByTestId('article-element'); 
    const blogImages = screen.getAllByRole('img');

  });


test('renders blog links with images and captions', () => {
  render(
    <Router>
      <BlogView />
    </Router>
  );
    const blogImages = screen.queryAllByAltText(/./);

    // Check if each blog has a corresponding caption
    blogImages.forEach((image, index) => {
      const caption = screen.getByText(/./);
      expect(caption).toBeInTheDocument();

      // Optional: Check if the Link component is present with the correct 'to' prop
      const link = screen.getByRole('link', { name: /./ });
      expect(link).toHaveAttribute('to', `/blog${index + 1}`);
    });
  });
