import { render, screen } from '@testing-library/react';
import Ship from '../components/Ship';
import { ship } from './mock';

test('renders Ship Component', () => {
  render(<Ship ship={ship} />);
  const shipTitle = screen.getByText(ship.name);
  expect(shipTitle).toBeInTheDocument();
  const shipImage = screen.getByAltText(ship.model)
  expect(shipImage).toBeInTheDocument();
  expect(shipImage.src).toBe('http://localhost/assets/img/starships/ds-1_orbital_battle_station.png');
  const shipModel = screen.getByText(ship.model);
  expect(shipModel.href).toBe(ship.url);
  const shipManufacturer = screen.getByText(ship.manufacturer);
  expect(shipManufacturer.textContent).toBe(ship.manufacturer);
});
