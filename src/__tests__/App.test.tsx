import { render } from '@testing-library/react';
import App from '../App';

describe('Main App Tests',  () => {
    it('renders main app', () => {
      const comp = render(<App />);
      expect(comp).toBeTruthy();
    });
})
